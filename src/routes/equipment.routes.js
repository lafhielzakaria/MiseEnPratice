import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';
import { requireRole } from '../middlewares/require-role.js';
import { validateCreateEquipment } from '../middlewares/validate-create-equipment.js';
import { create } from '../controllers/equipment.controller.js';
import { asyncHandler } from '../shared/async-handler.js';
import { notImplemented } from '../shared/http-error.js';
export const equipmentRouter = Router();
// MES 1 - TODO A : brancher les fonctions deja importees dans le bon ordre.
equipmentRouter.post('/', (req, res, next) => {
  asyncHandler(authenticate),
    requireRole('admin'),
    validateCreateEquipment,
    asyncHandler(create)
});
