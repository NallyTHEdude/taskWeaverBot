import axios from 'axios';
import { ApiError, logger } from '../../utils/index.js';
import { TELEGRAM_BOT_TOKEN } from '../../config/index.js';

const BASE_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export function axiosInstance() {
    return {
        get(method, params) {
            return axios
                .get(`/${method}`, {
                    baseURL: BASE_URL,
                    params,
                })
                .catch((error) => {
                    logger.error('Error during GET request:', error.message);
                    throw new ApiError(
                        error.response?.status || 500,
                        error.response?.data?.description ||
                            'Failed to make GET request',
                    );
                });
        },

        post(method, data) {
            return axios
                .post(`/${method}`, data, {
                    baseURL: BASE_URL,
                })
                .catch((error) => {
                    logger.error('Error during POST request:', {
                        message: error.message,
                        response: error.response?.data,
                        status: error.response?.status,
                    });
                    throw new ApiError(
                        error.response?.status || 500,
                        error.response?.data?.description ||
                            'Failed to make POST request',
                    );
                });
        },
    };
}
