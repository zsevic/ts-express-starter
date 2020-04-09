/* eslint-disable class-methods-use-this */
// import Boom from '@hapi/boom';
import { Custom } from 'domain/entities/Custom';
import CustomModel from 'gateways/database/models/CustomModel';

export class CustomRepository {
  async getCustomList(): Promise<Custom[]> {
    // throw Boom.badRequest('Error!');
    return CustomModel.find({});
  }
}

export default CustomRepository;
