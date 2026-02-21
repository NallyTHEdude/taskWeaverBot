import {Router} from 'express';
import { 
    getGoogleAuthUrl, googleCallback,
    getGithubAuthUrl, githubCallback,
    getMicrosoftAuthUrl, microsoftCallback
} from '../controllers/oauth.controller.js';

const router = Router();
// ---------- Authorization URL Routes ----------
router.get('/google', getGoogleAuthUrl);
router.get('/github', getGithubAuthUrl);
router.get('/microsoft', getMicrosoftAuthUrl);

// ---------- Callback Routes ----------
router.get('/google/callback', googleCallback);
router.get('/github/callback', githubCallback);
router.get('/microsoft/callback', microsoftCallback);

export default router;