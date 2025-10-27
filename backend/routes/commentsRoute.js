import express from 'express';
import { getAllComments } from '../controllers/CommentsController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/api/get-comments', verifyToken, getAllComments);

export default router;
