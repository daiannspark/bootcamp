import express from 'express';
import { userAction, getUserById, addNewUser } from '../controllers/userController';

const router = express.Router();

router.get('/', userAction);
router.post('/', addNewUser);
router.get('/:userId', getUserById);

export default router;
