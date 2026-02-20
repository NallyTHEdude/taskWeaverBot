import app from './app.js';
import { PORT } from './config/index.js';
import { connectDB } from './db/index.js';
import { logger } from './utils/logger.js';

//Connect database
connectDB();

//app listener
app.listen(PORT, () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
});
