import express from 'express';
import {
  createVideo,
  deleteVideo,
  getAllVideo,
  getSingleVideo,
} from '../controllers/VideoController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/api/get-video', verifyToken, getAllVideo);
router.get('/api/single-video', getSingleVideo);
router.post('/api/create-video', verifyToken, createVideo);
router.delete('/api/delete-video/:id', verifyToken, deleteVideo);

export default router;
