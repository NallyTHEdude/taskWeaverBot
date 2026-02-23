import app from './app.js';
import { BASE_API_URL, PORT } from './config/index.js';
import { connectDB } from './db/index.js';
import { logger } from './utils/index.js';

//Connect database
connectDB();

//app listener
app.listen(PORT, () => {
    logger.info(`Server is running at http://${BASE_API_URL}:${PORT}`);
});
