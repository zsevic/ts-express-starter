import { customRepository } from 'gateways';
import { Custom } from 'domain/entities/Custom';

export async function getCustomList(): Promise<Custom[]> {
  return customRepository.getCustomList();
}

export default getCustomList;
