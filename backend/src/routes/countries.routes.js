import express from 'express';
import {
  getAllCountries,
  getCountryBySlug,
  createCountry,
  updateCountry,
  deleteCountry
} from '../modules/countries/countries.controller.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getAllCountries);
router.get('/:slug', getCountryBySlug);
router.post('/', authenticateToken, upload.fields([
  { name: 'flag_image', maxCount: 1 },
  { name: 'banner_image', maxCount: 1 }
]), createCountry);
router.put('/:id', authenticateToken, upload.fields([
  { name: 'flag_image', maxCount: 1 },
  { name: 'banner_image', maxCount: 1 }
]), updateCountry);
router.delete('/:id', authenticateToken, deleteCountry);

export default router;
