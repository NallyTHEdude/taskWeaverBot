import express, { Router } from 'express';
import { githubWebhookHandler } from '../../controllers/providers/githubProvider.controller.js';
const router = Router();

router.post(
    '/github/webhook',
    express.raw({ type: '*/*' }),
    githubWebhookHandler,
);

export default router;
