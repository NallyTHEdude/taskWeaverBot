import crypto from "crypto";
import { BASE_API_URL } from '../config/index.js';
import { asyncHandler, ApiResponse, ApiError, logger } from '../utils/index.js';
import { IntegrationProvidersEnum } from "../utils/constants.js";
import { prisma } from '../db/index.js';
import {
    googleOAuthClient,
    githubOAuthClient,
    microsoftOAuthClient
} from "../services/oauth.service.js";

// ---------- OAuth Authorization URL Controllers ----------
const getGoogleAuthUrl = asyncHandler(async (req, res) => {
    const { telegramId } = req.query;
    if (!telegramId) {
        throw new ApiError(400, 'Missing required query parameter: telegramId');
    }

    const state = JSON.stringify({
        telegramId,
        nonce: crypto.randomBytes(8).toString("hex")
    });
    const googleAuthorizationUrl = googleOAuthClient.authorizeURL({
        redirect_uri: `${BASE_API_URL}/api/v1/auth/google/callback`,
        scope: [
            'openid',
            'email',
            'profile',
            'https://www.googleapis.com/auth/calendar.readonly',
            'https://www.googleapis.com/auth/spreadsheets.readonly',
            'https://www.googleapis.com/auth/tasks.readonly'
        ].join(' '),
        access_type: 'offline',
        prompt: 'consent',
        state: state
    });
    return res.json(new ApiResponse(200, { url: googleAuthorizationUrl }));
});

// TODO: check and update github
const getGithubAuthUrl = asyncHandler(async (req, res) => {
    const state = crypto.randomBytes(16).toString("hex");
    const githubAuthorizationUrl = githubOAuthClient.authorizeURL({
        redirect_uri: `${BASE_API_URL}/api/v1/auth/github/callback`,
        scope: 'read:user user:email',
        state: state
    });
    return res.json(new ApiResponse(200, { url: githubAuthorizationUrl }));
});

// TODO: check and update microsoft
const getMicrosoftAuthUrl = asyncHandler(async (req, res) => {
    const state = crypto.randomBytes(16).toString("hex");
    const microsoftAuthorizationUrl = microsoftOAuthClient.authorizeURL({
        redirect_uri: `${BASE_API_URL}/api/v1/auth/microsoft/callback`,
        scope: 'openid email profile',
        state: state
    });
    return res.json(new ApiResponse(200, { url: microsoftAuthorizationUrl }));
});


// ---------- Callback Controllers ----------   
const googleCallback = asyncHandler(async (req, res) => {
    const { code, state } = req.query;

    if (!code) {
        throw new ApiError(400, 'Authorization code is missing');
    }

    const parsedState = JSON.parse(state);
    const { telegramId } = parsedState;
    logger.info("telegram id is: " , telegramId);
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

        return res.json(new ApiResponse(200, { message: 'Google OAuth successful' }));
    } catch (error) {
        logger.error('Error exchanging authorization code for tokens', {
            error: error.message,
            stack: error.stack,
        });
        throw new ApiError(500, 'Failed to exchange authorization code for tokens', [error.message]);
    }
});

// TODO: check and update github CALLBACK
const githubCallback = asyncHandler(async (req, res) => {
    const { code, state } = req.query;

    if (!code) {
        throw new ApiError(400, 'Authorization code is missing');
    }

    const user = await prisma.user.findUnique({
        where: { telegramId: state },
    });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    try {
        const tokenParams = {
            code,
            redirect_uri: `${BASE_API_URL}/api/v1/auth/github/callback`,
        };

        const accessToken = await githubOAuthClient.getToken(tokenParams);

        await prisma.integration.upsert({
            where: {
                userId_provider: {
                    userId: user.id,
                    provider: 'github',
                },
            },
            update: {
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
            create: {
                userId: user.id,
                provider: 'github',
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
        });

        return res.json(new ApiResponse(200, { message: 'GitHub OAuth successful' }));
    } catch (error) {
        throw new ApiError(500, 'Failed to exchange authorization code for tokens', [error.message]);
    }
});

// TODO: check and update microsoft CALLBACK
const microsoftCallback = asyncHandler(async (req, res) => {
    const { code, state } = req.query;

    if (!code) {
        throw new ApiError(400, 'Authorization code is missing');
    }

    const user = await prisma.user.findUnique({
        where: { telegramId: state },
    });

    if (!user) {
        throw new ApiError(404, 'User not found');
    }

    try {
        const tokenParams = {
            code,
            redirect_uri: `${BASE_API_URL}/api/v1/auth/microsoft/callback`,
        };

        const accessToken = await microsoftOAuthClient.getToken(tokenParams);

        await prisma.integration.upsert({
            where: {
                userId_provider: {
                    userId: user.id,
                    provider: 'microsoft',
                },
            },
            update: {
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
            create: {
                userId: user.id,
                provider: 'microsoft',
                accessToken: accessToken.token.access_token,
                refreshToken: accessToken.token.refresh_token,
                expiresAt: new Date(accessToken.token.expires_at),
            },
        });

        return res.json(new ApiResponse(200, { message: 'Microsoft OAuth successful' }));
    } catch (error) {
        throw new ApiError(500, 'Failed to exchange authorization code for tokens', [error.message]);
    }
});

export {
    getGoogleAuthUrl,
    getGithubAuthUrl,
    getMicrosoftAuthUrl,

    googleCallback,
    githubCallback,
    microsoftCallback
}