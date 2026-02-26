import crypto from 'crypto';
import { BASE_API_URL } from '../config/index.js';
import { asyncHandler, ApiResponse, ApiError, logger } from '../utils/index.js';
import { IntegrationProvidersEnum } from '../utils/constants.js';
import { prisma } from '../db/index.js';
import {
    googleOAuthClient,
    githubOAuthClient,
} from '../services/oauth.service.js';
import { setupGithubWebhooks } from '../services/providers/githubProvider.service.js';
import axios from 'axios';

// ---------- OAuth Authorization URL Controllers ----------
const getGoogleAuthUrl = asyncHandler(async (req, res) => {
    const { telegramId } = req.query;
    if (!telegramId) {
        throw new ApiError(400, 'Missing required query parameter: telegramId');
    }

    const state = JSON.stringify({
        telegramId,
        nonce: crypto.randomBytes(8).toString('hex'),
    });
    const googleAuthorizationUrl = googleOAuthClient.authorizeURL({
        redirect_uri: `${BASE_API_URL}/api/v1/auth/google/callback`,
        scope: [
            'openid',
            'email',
            'profile',
            'https://www.googleapis.com/auth/calendar', // Google Calendar
            'https://www.googleapis.com/auth/spreadsheets.readonly', // Sheets
            'https://www.googleapis.com/auth/tasks', // Google Tasks
            'https://www.googleapis.com/auth/drive.readonly', // Docs + Colab via Drive
        ].join(' '),
        access_type: 'offline',
        prompt: 'consent',
        state: state,
    });
    return res.json(new ApiResponse(200, { url: googleAuthorizationUrl }));
});

const getGithubAuthUrl = asyncHandler(async (req, res) => {
    const { telegramId } = req.query;

    if (!telegramId) {
        throw new ApiError(400, 'Missing required query parameter: telegramId');
    }

    const state = JSON.stringify({
        telegramId,
        nonce: crypto.randomBytes(8).toString('hex'),
    });

    const githubAuthorizationUrl = githubOAuthClient.authorizeURL({
        redirect_uri: `${BASE_API_URL}/api/v1/auth/github/callback`,
        scope: 'read:user user:email repo',
        state: state,
    });

    return res.json(new ApiResponse(200, { url: githubAuthorizationUrl }));
});

// ---------- Callback Controllers ----------
const googleCallback = asyncHandler(async (req, res) => {
    const { code, state } = req.query;

    if (!code) {
        throw new ApiError(400, 'Authorization code is missing');
    }

    const parsedState = JSON.parse(state);
    const { telegramId } = parsedState;
    logger.info('telegram id is: ', telegramId);
    const user = await prisma.user.findUnique({
        where: { telegramId },
    });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    try {
        const tokenParams = {
            code,
            redirect_uri: `${BASE_API_URL}/api/v1/auth/google/callback`,
        };

        const accessToken = await googleOAuthClient.getToken(tokenParams);

        await prisma.integration.upsert({
            where: {
                userId_provider: {
                    userId: user.id,
                    provider: IntegrationProvidersEnum.GOOGLE,
                },
            },
            update: {
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
            create: {
                userId: user.id,
                provider: IntegrationProvidersEnum.GOOGLE,
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
        });

        return res.json(
            new ApiResponse(200, { message: 'Google OAuth successful' }),
        );
    } catch (error) {
        logger.error('Error exchanging authorization code for tokens', {
            error: error.message,
            stack: error.stack,
        });
        throw new ApiError(
            500,
            'Failed to exchange authorization code for tokens',
            [error.message],
        );
    }
});

const githubCallback = asyncHandler(async (req, res) => {
    const { code, state } = req.query;

    if (!code) throw new ApiError(400, "Authorization code is missing");
    if (!state) throw new ApiError(400, "State is missing");

    const parsedState = JSON.parse(state);
    const { telegramId } = parsedState;

    const user = await prisma.user.findUnique({
        where: { telegramId }
    });

    if (!user) throw new ApiError(404, "User not found");

    //Exchanging code for token
    const tokenResponse = await githubOAuthClient.getToken({
        code,
        redirect_uri: `${BASE_API_URL}/api/v1/auth/github/callback`
    });

    const accessToken = tokenResponse.token.access_token;

    //get GitHub user profile
    const githubUserResponse = await axios.get(
        "https://api.github.com/user",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/vnd.github+json"
            }
        }
    );

    const githubUser = githubUserResponse.data;

    //Store integrations table
    const integration = await prisma.integration.upsert({
        where: {
            userId_provider: {
                userId: user.id,
                provider: IntegrationProvidersEnum.GITHUB
            }
        },
        update: {
            accessToken,
            providerAccountId: String(githubUser.id)
        },
        create: {
            userId: user.id,
            provider: IntegrationProvidersEnum.GITHUB,
            providerAccountId: String(githubUser.id),
            accessToken
        }
    });

    //Setup github webhooks for real time repo data 
    await setupGithubWebhooks(integration);

    return res.json(
        new ApiResponse(200, { message: "GitHub OAuth successful" })
    );
});

export { getGoogleAuthUrl, getGithubAuthUrl, googleCallback, githubCallback };
