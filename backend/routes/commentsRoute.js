import express from 'express';
import {
  activeComment,
  createComment,
  deleteComment,
  getAllComments,
  getComment,
  unActiveComment,
  updateComment,
} from '../controllers/CommentsController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/api/comment/:newsId', getComment);
router.get('/api/get-comment', verifyToken, getAllComments);
router.post('/api/create-comment', createComment);
router.put('/api/comment/active/:id', verifyToken, activeComment);
router.put('/api/comment/unactive/:id', verifyToken, unActiveComment);
router.put('/api/update-comment/:id', verifyToken, updateComment);
router.delete('/api/delete-comment/:id', verifyToken, deleteComment);
export default router;
