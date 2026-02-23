import sendMessage, { handleMessage } from '../services/telegram.service.js';
import { asyncHandler, ApiError, ApiResponse, logger } from '../utils/index.js';
import { prisma } from '../db/index.js';

const handler = asyncHandler(async (req, res, next) => {
    const { body } = req;
    if (!body) {
        logger.error('Request body is missing:', req);
        throw new ApiError(400, 'Request body is missing');
    }

    // Handle both `message` and `edited_message`
    const messageObj = body.message || body.edited_message;
    if (!messageObj) {
        logger.error('Message object is missing in the request body:', body);
        throw new ApiError(
            400,
            'Message object is missing in the request body',
        );
    }

    // update user if name or chatId is changed, otherwise create new user
    const telegramId = messageObj.from.id.toString();
    const name = messageObj.from.username;
    const chatId = messageObj.chat.id.toString();
    await prisma.user.upsert({
        where: { telegramId },
        update: {
            name,
            chatId,
        },
        create: {
            telegramId,
            name,
            chatId,
        },
    });

    logger.info('Received message:', messageObj);
    await handleMessage(messageObj);
    res.status(200).json(
        new ApiResponse(200, null, 'Message handled successfully'),
    );
});

export { handler };
