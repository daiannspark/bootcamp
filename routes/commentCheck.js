import express from 'express';
import {commentAction, getCommentById} from '../controllers/commentController';

const router = express.Router();

router.get('/', commentAction);
router.get('/:productId', getCommentById);

export default router;
