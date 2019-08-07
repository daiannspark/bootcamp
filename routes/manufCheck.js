import express from 'express';
import manufAction from '../controllers/manufController';

const router = express.Router();

router.get('/', manufAction);

export default router;
