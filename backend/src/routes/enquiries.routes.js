import express from 'express';
import {
  getAllEnquiries,
  getEnquiryById,
  createEnquiry,
  updateEnquiryStatus,
  deleteEnquiry,
  getEnquiryStats
} from '../modules/enquiries/enquiries.controller.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getAllEnquiries);
router.get('/stats', authenticateToken, getEnquiryStats);
router.get('/:id', authenticateToken, getEnquiryById);
router.post('/', createEnquiry);
router.put('/:id/status', authenticateToken, updateEnquiryStatus);
router.delete('/:id', authenticateToken, deleteEnquiry);

export default router;
