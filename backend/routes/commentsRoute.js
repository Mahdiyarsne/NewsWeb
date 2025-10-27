import express from 'express';
import {
  createComment,
  deleteComment,
  getAllComments,
  updateComment,
} from '../controllers/CommentsController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/api/get-comment', verifyToken, getAllComments);
router.post('/api/create-comment', createComment);
router.put('/api/update-comment/:id', verifyToken, updateComment);
router.delete('/api/delete-comment/:id', verifyToken, deleteComment);
export default router;
