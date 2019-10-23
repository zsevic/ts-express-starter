import Joi from '@hapi/joi';

export const customQuery = Joi.object({
  name: Joi.number().optional(),
});
