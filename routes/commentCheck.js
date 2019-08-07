import express from 'express';
import commentAction from '../controllers/commentController';

const router = express.Router();

router.get('/', commentAction);

export default router;
