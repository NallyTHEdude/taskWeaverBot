import { createLogger, format, transports } from 'winston';

const normalizeMetadata = format((info) => {
    // handle error passed as metadata (second argument)
    if (info.meta instanceof Error) {
        info.meta = { message: info.meta.message, stack: info.meta.stack };
    } else if (
        info.meta !== undefined &&
        (typeof info.meta !== 'object' || Array.isArray(info.meta))
    ) {
        info.meta = { value: info.meta };
    }

    // handle error passed directly as the message
    if (info.message instanceof Error) {
        info.stack = info.message.stack;
        info.message = info.message.message;
    }

    return info;
});

const customProdFormat = format.combine(
    normalizeMetadata(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.json(),
);

const productionLogger = () => {
    return createLogger({
        level: 'info',
        format: customProdFormat,
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'logs/production.log' }),
        ],
    });
};

export default productionLogger;
