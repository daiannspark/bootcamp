import express from 'express';
import {manufAction, getManufById, modifyManufacture, deleteManufacture} from '../controllers/manufController';

const router = express.Router();

router.get('/', manufAction);
router.post('/', modifyManufacture);
router.put('/:manufId', modifyManufacture);
router.get('/:manufId', getManufById);
router.delete('/:manufId', deleteManufacture);

export default router;
