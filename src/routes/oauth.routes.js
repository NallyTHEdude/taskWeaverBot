import { Router } from 'express';
import {
    getGoogleAuthUrl,
    googleCallback,
    getGithubAuthUrl,
    githubCallback,
} from '../controllers/oauth.controller.js';

const router = Router();
// ---------- Authorization URL Routes ----------
router.get('/google', getGoogleAuthUrl);
router.get('/github', getGithubAuthUrl);

// ---------- Callback Routes ----------
router.get('/google/callback', googleCallback);
router.get('/github/callback', githubCallback);

export default router;
