import { equipmentRepository } from '../repositories/equipment.repository.js';
import { HttpError, notImplemented } from '../shared/http-error.js';

export async function createEquipment(input) {
  try {
    const data = {
      assetTag: input.assetTag.trim().toUpperCase(),
      name: input.name.trim(),
      category: input.category.trim(),
      dailyLateFeeCents: input.dailyLateFeeCents.trim(),
      isArchived: false,
    };
    return await equipmentRepository.create(data);
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.assetTag) {
      throw new HttpError(409, 'EQUIPMENT_ALREADY_EXISTS', 'Ce code existe deja.');
    }
    throw error;
  }
}
