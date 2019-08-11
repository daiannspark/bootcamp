import express from 'express';
import { catAction, getCategoryById, addNewCategory } from '../controllers/categoryController';

const router = express.Router();

router.get('/', catAction);
router.post('/', addNewCategory);
router.get('/:categoryId', getCategoryById);

export default router;
