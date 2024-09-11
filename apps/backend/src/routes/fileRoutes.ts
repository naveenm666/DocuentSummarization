// apps/backend/src/routes/fileRoutes.ts

import { Router } from 'express';
import { uploadFile } from '../controller/fileController';

const router = Router();

router.post('/upload', ...uploadFile);

export default router;
