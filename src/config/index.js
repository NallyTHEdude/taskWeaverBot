import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(',') || '*';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const DATABASE_URL = process.env.DATABASE_URL;

const BASE_API_URL = process.env.BASE_API_URL;

const OAUTH_GOOGLE_CLIENT_ID = process.env.OAUTH_GOOGLE_CLIENT_ID;
const OAUTH_GOOGLE_CLIENT_SECRET = process.env.OAUTH_GOOGLE_CLIENT_SECRET;

const OAUTH_GITHUB_CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;
const OAUTH_GITHUB_CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET;

const GROQ_LLM_API_KEY = process.env.GROQ_LLM_API_KEY;

export {
    NODE_ENV,
    PORT,
    CORS_ORIGIN,
    TELEGRAM_BOT_TOKEN,
    DATABASE_URL,
    BASE_API_URL,
    OAUTH_GOOGLE_CLIENT_ID,
    OAUTH_GOOGLE_CLIENT_SECRET,
    OAUTH_GITHUB_CLIENT_ID,
    OAUTH_GITHUB_CLIENT_SECRET,
    GROQ_LLM_API_KEY,
};
