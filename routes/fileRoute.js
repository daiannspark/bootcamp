import express from 'express';
import { saveFile } from '../controllers/fileController';

const router = express.Router();

router.post('/', saveFile);

export default router;