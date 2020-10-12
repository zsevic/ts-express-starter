import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.QUERY]: {
    name: Joi.string().min(5).optional(),
  },
});
