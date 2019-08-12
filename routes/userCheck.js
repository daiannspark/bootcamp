import express from 'express';
import { userAction, getUserById, createUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.get('/', userAction);
router.post('/', createUser);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);

export default router;
