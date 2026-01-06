import express from 'express';
import {
  getAllUniversities,
  getUniversityBySlug,
  createUniversity,
  updateUniversity,
  deleteUniversity
} from '../modules/universities/universities.controller.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getAllUniversities);
router.get('/:slug', getUniversityBySlug);
router.post('/', authenticateToken, upload.single('logo'), createUniversity);
router.put('/:id', authenticateToken, upload.single('logo'), updateUniversity);
router.delete('/:id', authenticateToken, deleteUniversity);

export default router;
