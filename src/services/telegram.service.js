import { axiosInstance } from './lib/axios.js';
import { logger, ApiError } from '../utils/index.js';
import axios from 'axios'; 
import { BASE_API_URL } from '../config/index.js';

const botApi = axiosInstance();

function sendMessage(messageObj, messageText, parse_mode=null) {
    if (!messageObj || !messageObj.chat || !messageObj.chat.id) {
        throw new ApiError(400, 'Invalid message object');
    }

    const payload = {
        chat_id: messageObj.chat.id,
        text: messageText,
    }

    if(parse_mode) {
        payload.parse_mode = parse_mode;
    }

    logger.info(`chatId: ${messageObj.chat.id}, message: ${messageText}, parse_mode: ${parse_mode}`);

    return botApi.post('sendMessage', payload);
}

function sendMessageExport(chatId, messageText, parse_mode=null) {
    if (!chatId) throw new ApiError(400, 'Invalid  chatId');
    if (!text.trim()) throw new ApiError(400, 'Invalid text length');

    const payload = {
        chat_id: chatId,
        text: messageText,
    }
    if(parse_mode) {
        payload.parse_mode = parse_mode;
    }

    logger.info(`chatId: ${chatId}, message: ${text}, parse_mode: ${parse_mode}`);

    return botApi.post('sendMessage', payload);
}

async function handleMessage(messageObj) {
    const messageText = messageObj.text?.trim();
    if (!messageText) {
        return sendMessage(messageObj, "I only understand text messages.");
    }
    
    if (messageText.charAt(0) === '/') {
        const command = messageText.substr(1).toLowerCase();
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
                try {
                    const getGoogleUrl = `${BASE_API_URL}/api/v1/auth/google?telegramId=${messageObj.chat.id}`;
                    const googleResponse = await axios.get(getGoogleUrl);

                    if (!googleResponse.data || !googleResponse.data.data || !googleResponse.data.data.url) {
                        logger.error('Invalid response from Google auth endpoint:', googleResponse.data);
                        return sendMessage(
                            messageObj,
                            'Failed to retrieve Google authentication URL. Please try again later.',
                        );
                    }

                    return sendMessage(
                        messageObj,
                        `Google: <a href="${googleResponse.data.data.url}">Google link</a>`,
                        'HTML'
                    );
                } catch (error) {
                    logger.error('Error fetching Google auth URL:', error.message);
                    return sendMessage(
                        messageObj,
                        'An error occurred while connecting to Google. Please try again later.',
                    );
                }
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
