import { axiosInstance } from './lib/axios.js';
import { logger, ApiError } from '../utils/index.js';
import axios from 'axios';
import { BASE_API_URL } from '../config/index.js';

const botApi = axiosInstance();

function sendMessage(messageObj, messageText, parse_mode = null) {
    if (!messageObj || !messageObj.chat || !messageObj.chat.id) {
        throw new ApiError(400, 'Invalid message object');
    }

    const payload = {
        chat_id: messageObj.chat.id,
        text: messageText,
    };

    if (parse_mode) {
        payload.parse_mode = parse_mode;
    }

    logger.info(
        `chatId: ${messageObj.chat.id}, message: ${messageText}, parse_mode: ${parse_mode}`,
    );

    return botApi.post('sendMessage', payload);
}

function sendMessageExport(chatId, messageText, parse_mode = null) {
    if (!chatId) throw new ApiError(400, 'Invalid  chatId');
    if (!messageText || !messageText.trim())
        throw new ApiError(400, 'Invalid text length');

    const payload = {
        chat_id: chatId,
        text: messageText,
    };
    if (parse_mode) {
        payload.parse_mode = parse_mode;
    }

    logger.info(
        `chatId: ${chatId}, message: ${messageText}, parse_mode: ${parse_mode}`,
    );

    return botApi.post('sendMessage', payload);
}

const handleConnectCommand = async (messageObj) => {
    try {
        // call url to get auth url's
        const getGoogleUrl = `${BASE_API_URL}/api/v1/auth/google?telegramId=${messageObj.chat.id}`;
        const githubUrl = `${BASE_API_URL}/api/v1/auth/github?telegramId=${messageObj.chat.id}`;
        const microsoftUrl = `${BASE_API_URL}/api/v1/auth/microsoft?telegramId=${messageObj.chat.id}`;

        // make parallel requests to get all auth urls
        // const [googleResponse, githubResponse, microsoftResponse] =
        // await Promise.all([
        //     axios.get(getGoogleUrl),
        //     axios.get(githubUrl),
        //     axios.get(microsoftUrl),
        // ]);
        const googleResponse = await axios.get(getGoogleUrl);
        const githubResponse = await axios.get(githubUrl);
        const microsoftResponse = await axios.get(microsoftUrl);

        // extract urls from responses
        const googleUrl = googleResponse?.data?.data?.url;
        const githubAuthUrl = githubResponse?.data?.data?.url;
        const microsoftAuthUrl = microsoftResponse?.data?.data?.url;

        // handle url errors
        if (!googleUrl) {
            logger.error('Invalid Google auth response:', googleResponse.data);
            return sendMessage(
                messageObj,
                'Failed to retrieve Google authentication URL. Please try again later.',
            );
        }
        if (!githubAuthUrl) {
            logger.error('Invalid Github auth response:', githubResponse.data);
            return sendMessage(
                messageObj,
                'Failed to retrieve Github authentication URL. Please try again later.',
            );
        }
        if (!microsoftAuthUrl) {
            logger.error(
                'Invalid Microsoft auth response:',
                microsoftResponse.data,
            );
            return sendMessage(
                messageObj,
                'Failed to retrieve Microsoft authentication URL. Please try again later.',
            );
        }

        // send message with auth urls
        return sendMessage(
            messageObj,
            `Google: <a href="${googleUrl}">Google link</a>\n` +
                `GitHub: <a href="${githubAuthUrl}">GitHub link</a>\n` +
                `Microsoft: <a href="${microsoftAuthUrl}">Microsoft link</a>`,
            'HTML',
        );
    } catch (error) {
        logger.error('Error fetching Google auth URL:', error.message);
        return sendMessage(
            messageObj,
            'An error occurred while connecting to Google. Please try again later.',
        );
    }
};

async function handleMessage(messageObj) {
    const messageText = messageObj.text?.trim();
    if (!messageText) {
        return sendMessage(messageObj, 'I only understand text messages.');
    }

    if (messageText.charAt(0) === '/') {
        const command = messageText.slice(1).toLowerCase();
        switch (command) {
            case 'start':
                return sendMessage(
                    messageObj,
                    'Welcome to Task Weaver Bot! Use /help to see available commands.',
                );
            case 'hello':
                return sendMessage(
                    messageObj,
                    'Hello! How can I assist you today?',
                );
            case 'connect':
                return await handleConnectCommand(messageObj);
            default:
                return sendMessage(
                    messageObj,
                    `Unknown command: ${command}. Use /help to see available commands.`,
                );
        }
    } else {
        return sendMessage(
            messageObj,
            `LMAOO U SAID "${messageText}" WHAT A LOSER HAHAHAHAHA`,
        );
    }
}

export { handleMessage };
export default sendMessageExport;
