import express from 'express';
import cors from 'cors';
import { CORS_ORIGIN } from './config/index.js';

// initializing express application
const app = express();

//basic app confiduration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// cors configuration
app.use(
    cors({
        origin: CORS_ORIGIN,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

// routes import
import healthCheckRouter from './routes/healthCheck.routes.js';
import oauth2Router from './routes/oauth.routes.js';
import telegramRouter from './routes/telegram.routes.js';

// routes
app.use('/api/v1/health', healthCheckRouter);
app.use('/api/v1/auth', oauth2Router);
app.use('/', telegramRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Task Weaver API');
});

export default app;
