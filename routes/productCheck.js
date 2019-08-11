import express from 'express';
import { productAction, getProductById, modifyProduct, deleteProduct } from '../controllers/productController';

const router = express.Router();
router.get('/', productAction);
router.post('/', modifyProduct);
router.put('/:productId', modifyProduct);
router.get('/:productId', getProductById);
router.delete('/:productId', deleteProduct);

export default router;
