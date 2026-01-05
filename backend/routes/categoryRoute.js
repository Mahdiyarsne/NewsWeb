import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryHome,
  updateCategory,
} from '../controllers/CategoryController.js';
const router = express.Router();

router.get('/api/category/home', getCategoryHome);

router.get('/api/get-category', verifyToken, getCategories);
router.post('/api/create-category', verifyToken, createCategory);
router.put('/api/update-category/:id', verifyToken, updateCategory);
router.delete('/api/delete-category/:id', verifyToken, deleteCategory);

export default router;
