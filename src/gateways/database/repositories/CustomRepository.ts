import { Custom } from 'domain/entities/Custom';
import CustomModel from 'gateways/database/models/CustomModel';

export class CustomRepository {
  getCustomList = async (): Promise<Custom[]> => CustomModel.find({});
}

export default CustomRepository;
