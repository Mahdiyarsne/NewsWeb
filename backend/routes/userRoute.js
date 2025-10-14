import express from 'express';
import {
  getAllUsers,
  loginUser,
  registerUser,
} from '../controllers/UserController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/api/users', verifyToken, getAllUsers);

router.post('/api/users/register', registerUser);
router.post('/api/users/login', loginUser);

export default router;
