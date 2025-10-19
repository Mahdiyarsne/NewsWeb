import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  createCategory,
  getCategories,
} from '../controllers/CategoryController.js';
const router = express.Router();

router.get('/api/get-category', getCategories);
router.post('/api/create-category', verifyToken, createCategory);

export default router;
