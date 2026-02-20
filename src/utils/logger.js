import { NODE_ENV } from '../config/index.js';
import productionLogger from './lib/logger/productionLogger.js';
import developmentLogger from './lib/logger/developmentLogger.js';

let logger;
if (NODE_ENV === 'production') {
    logger = productionLogger();
} else {
    logger = developmentLogger();
}
export { logger };
