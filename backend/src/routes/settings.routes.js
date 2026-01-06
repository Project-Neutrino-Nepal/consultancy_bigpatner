import express from 'express';
import {
  getAllSettings,
  updateSettings,
  getDashboardStats
} from '../modules/settings/settings.controller.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllSettings);
router.put('/', authenticateToken, updateSettings);
router.get('/dashboard', authenticateToken, getDashboardStats);

export default router;
