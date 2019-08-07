import express from 'express';
import cardAction from '../controllers/cardController';

const router = express.Router();

router.get('/', cardAction);

export default router;
