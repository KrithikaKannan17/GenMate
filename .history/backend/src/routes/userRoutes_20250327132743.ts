import express from 'express';
import { auth, checkUserType } from '../middleware/auth';
import {
  register,
  login,
  getProfile,
  updateProfile,
  searchUsers,
  updatePoints,
  addBadge,
} from '../controllers/userController';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', auth, getProfile);
router.patch('/profile', auth, updateProfile);
router.get('/search', auth, searchUsers);
router.patch('/points', auth, updatePoints);
router.post('/badges', auth, addBadge);

// Teen-specific routes
router.get('/mentors', auth, checkUserType(['teen']), searchUsers);

// Senior-specific routes
router.get('/mentees', auth, checkUserType(['senior']), searchUsers);

export default router; 