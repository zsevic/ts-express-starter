import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import * as customController from './controller';
import { customQuery } from './validation';

const customRouter = Router();
const validator = createValidator();

customRouter.get('/', validator.query(customQuery), customController.getCustomListHandler);

export default customRouter;
