import express from 'express';
import catAction from '../controllers/categoryController';

const router = express.Router();

router.get('/', catAction);

export default router;
