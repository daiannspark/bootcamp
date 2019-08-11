import express from 'express';
import {
  catAction,
  getCategoryById,
  modifyCategory,
  deleteCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.get('/', catAction);
router.post('/', modifyCategory);
router.put('/:categoryId', modifyCategory);
router.get('/:categoryId', getCategoryById);
router.delete('/:categoryId', deleteCategory);

export default router;
