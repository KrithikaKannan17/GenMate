import express from 'express';
import { auth } from '../middleware/auth';
import {
  createSession,
  getSessions,
  updateSessionStatus,
  submitFeedback,
  getSessionStats,
} from '../controllers/sessionController';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Session management routes
router.post('/', createSession);
router.get('/', getSessions);
router.patch('/:id/status', updateSessionStatus);
router.post('/:id/feedback', submitFeedback);
router.get('/stats', getSessionStats);

export default router; 