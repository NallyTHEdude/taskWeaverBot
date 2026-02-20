import { axiosInstance } from './lib/axios.js';
import { ApiError } from '../utils/ApiError.js';
import { logger } from '../utils/logger.js';

const botApi = axiosInstance();

function sendMessage(messageObj, messageText) {
    if (!messageObj || !messageObj.chat || !messageObj.chat.id) {
        throw new ApiError(400, 'Invalid message object');
    }

    return botApi.get('sendMessage', {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function sendMessageExport(chatId, text) {
    if (!chatId) throw new ApiError(400, 'Invalid  chatId');
    if (!text.trim()) throw new ApiError(400, 'Invalid text length');

    logger.info(`chatId: ${chatId}, message: ${text}`);

    return botApi.get('sendMessage', {
        chat_id: chatId,
        text: text,
    });
}

function handleMessage(messageObj) {
    const messageText = messageObj.text.trim();
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
