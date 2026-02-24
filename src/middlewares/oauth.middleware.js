import prisma from '../db/index.js';
import { googleOAuthClient } from '../services/oauth.service.js';
import { ApiError, logger } from '../utils/index.js';
import { IntegrationProvidersEnum } from '../utils/constants.js';

const verifyGoogleAccessToken = (provider) => {
    return async (req, res, next) => {
        try {
            const userId = req.user.id; // assume you attach user earlier
            logger.debug(`userId: ${userId}, provider: ${provider}`);
            const integration = await prisma.integration.findUnique({
                where: {
                    userId_provider: {
                        userId,
                        provider,
                    },
                },
            });

            if (!integration) {
                throw new ApiError(404, `${provider} integration not found`);
            }

            let accessToken = integration.accessToken;

            // Google requires refresh
            if (provider === IntegrationProvidersEnum.GOOGLE) {
                if (
                    integration.expiresAt &&
                    integration.expiresAt <= new Date()
                ) {
                    logger.info(
                        `Integraion expiry date is: ${integration.expiresAt}`,
                    );
                    logger.debug(
                        `integraoin refreshToken is: ${integration.refreshToken}`,
                    );
                    if (!integration.refreshToken) {
                        throw new ApiError(
                            401,
                            'Refresh token missing. Re-auth required.',
                        );
                    }

                    const tokenObject = googleOAuthClient.createToken({
                        refresh_token: integration.refreshToken,
                    });

                    const refreshed = await tokenObject.refresh();

                    accessToken = refreshed.token.access_token;

                    await prisma.integration.update({
                        where: {
                            userId_provider: {
                                userId,
                                provider,
                            },
                        },
                        data: {
                            accessToken,
                            expiresAt: refreshed.token.expires_at
                                ? new Date(refreshed.token.expires_at)
                                : null,
                        },
                    });
                }
            }

            // Attach token for controller usage
            req.accessToken = accessToken;

            next();
        } catch (err) {
            next(err);
        }
    };
};

export { verifyGoogleAccessToken };
