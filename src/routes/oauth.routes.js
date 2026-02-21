import {Router} from 'express';
import {oAuthControllers} from '../controllers/oauth.controller.js'; // just dummy controllers for now, we will implement the actual logic later

const router = Router();

// this is just placeholder for now, we will implement the actual logic later
router.post('/oauth2/token', oAuthControllers.token);
router.get('/oauth2/authorize', oAuthControllers.authorize);

export default router;