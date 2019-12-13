/* eslint-disable class-methods-use-this */
import { Custom } from 'domain/entities/Custom';
import CustomModel from 'gateways/database/models/CustomModel';

export class CustomRepository {
  async getCustomList(): Promise<Custom[]> {
    return CustomModel.find({});
  }
}

export default CustomRepository;
