import { createEquipment } from '../services/equipment.service.js';
import { notImplemented } from '../shared/http-error.js';
export async function create(req, res) {
  // MES 1 - TODO B 
  const equipment = await createEquipment(req.validatedBody);
  res.status(201).json({ data: equipment });
}
