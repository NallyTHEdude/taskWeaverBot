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
const customDevFormat = format.combine(
    normalizeMetadata(),
    format.colorize(),
    format.timestamp({ format: 'HH:mm:ss' }),
    format.printf((info) => {
        const { timestamp, level, message, stack, ...meta } = info;

        let output = `${timestamp} [${level}]: ${message}`;

        if (stack) {
            output += `\n${stack}`;
        }

        if (Object.keys(meta).length > 0) {
            output += ' ' + JSON.stringify(meta, null, 2);
        }

        return output;
    }),
);

const developmentLogger = () => {
    return createLogger({
        level: 'debug',
        format: customDevFormat,
        transports: [new transports.Console()],
    });
};

export default developmentLogger;
