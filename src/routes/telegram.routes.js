import { handler } from '../controllers/telegram.controller.js';
import express from 'express';

const router = express.Router();

router.post('/', handler);

export default router;
