import express from 'express';
import { orderAction, getOrderById, addNewOrder } from '../controllers/orderController';

const router = express.Router();
router.get('/', orderAction);
router.post('/', addNewOrder);
router.get('/:orderId', getOrderById);

export default router;
