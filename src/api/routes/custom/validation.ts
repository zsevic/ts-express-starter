import * as Joi from '@hapi/joi';
import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export const customQuery = Joi.object({
  name: Joi.string().min(5).optional(),
});

export interface CustomRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    name: string
  }
}
