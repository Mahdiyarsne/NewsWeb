import express from 'express';
import {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
} from '../controllers/NewsController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/api/get-news', verifyToken, getAllNews);
router.get('/api/get-news/:id', verifyToken, getNewsById);
router.post('/api/create-news', verifyToken, createNews);
router.put('/api/update-news/:id', verifyToken, updateNews);
export default router;
