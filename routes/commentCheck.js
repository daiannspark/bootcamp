import express from 'express';
import { commentAction, getCommentById, modifyComment, deleteComment } from '../controllers/commentController';

const router = express.Router();

router.get('/', commentAction);
router.post('/', modifyComment);
router.put('/:commentId', modifyComment);
router.get('/:commentId', getCommentById);
router.delete('/:commentId', deleteComment);

export default router;
