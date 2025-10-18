import express from 'express';
import {
  deleteUser,
  getAllUsers,
  loginUser,
  Logout,
  registerUser,
} from '../controllers/UserController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { token } from '../controllers/RefreshToken.js';

const router = express.Router();
router.get('/token', token);

router.get('/api/users', verifyToken, getAllUsers);
router.post('/api/users/register', registerUser);
router.post('/api/users/login', loginUser);
router.delete('/api/users/logout', verifyToken, Logout);
router.delete('/api/users/:id', verifyToken, deleteUser);

export default router;
