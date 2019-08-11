import express from 'express';
import { orderAction, getOrderById, modifyOrder, deleteOrder } from '../controllers/orderController';

const router = express.Router();

router.get('/', orderAction);
router.post('/', modifyOrder);
router.put('/:orderId', modifyOrder);
router.get('/:orderId', getOrderById);
router.delete('/:orderId', deleteOrder);

export default router;
