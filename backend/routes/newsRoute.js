import express from 'express';
import { createNews, getAllNews } from '../controllers/NewsController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/api/get-news', verifyToken, getAllNews);
router.post('/api/create-news', verifyToken, createNews);

export default router;
