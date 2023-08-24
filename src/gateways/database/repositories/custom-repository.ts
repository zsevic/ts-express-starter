import { Custom } from 'src/domain/entities/custom';
import CustomModel from 'src/gateways/database/models/custom-model';

export class CustomRepository {
  // eslint-disable-next-line class-methods-use-this
  getCustomList = async (): Promise<Custom[]> => CustomModel.find({});
}

export default CustomRepository;
