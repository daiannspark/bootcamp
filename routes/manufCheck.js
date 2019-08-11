import express from 'express';
import {manufAction, getManufById, addNewManufacture} from '../controllers/manufController';

const router = express.Router();

router.get('/', manufAction);
router.post('/', addNewManufacture);
router.get('/:manufId', getManufById);

export default router;
