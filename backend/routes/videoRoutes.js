import express from 'express';
import { createVideo } from '../controllers/VideoController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/api/create-video', verifyToken, createVideo);

export default router;
