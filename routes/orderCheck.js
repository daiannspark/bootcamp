import express from 'express';
import { productAction, getProductById } from '../controllers/productController';

const router = express.Router();
router.get('/', productAction);
router.get('/:productId', getProductById);

export default router;
