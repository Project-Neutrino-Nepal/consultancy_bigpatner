import express from 'express';
import {
  getAllBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog
} from '../modules/blogs/blogs.controller.js';
import { authenticateToken } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/', authenticateToken, upload.single('featured_image'), createBlog);
router.put('/:id', authenticateToken, upload.single('featured_image'), updateBlog);
router.delete('/:id', authenticateToken, deleteBlog);

export default router;
