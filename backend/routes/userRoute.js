import express from 'express';
import { getAllUsers, registerUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/api/users', getAllUsers);
router.post('/api/users/register', registerUser);

export default router;
