import express from 'express';
import { userAction, getUserById, modifyUser, deleteUser } from '../controllers/userController';

const router = express.Router();

router.get('/', userAction);
router.post('/', modifyUser);
router.put('/:userId', modifyUser);
router.get('/:userId', getUserById);
router.delete('/:userId', deleteUser);

export default router;
