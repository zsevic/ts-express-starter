import { customRepository } from 'src/gateways';
import { Custom } from 'src/domain/entities/custom';

export async function getCustomList(): Promise<Custom[]> {
  return customRepository.getCustomList();
}

export default getCustomList;
