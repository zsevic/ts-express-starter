import { Router } from 'express';
import { asyncWrap } from 'utils';
import * as customController from './controller';
import customValidation from './validation';

const customRouter = Router();

customRouter.get(
  '/',
  customValidation,
  asyncWrap(customController.getCustomListHandler),
);

export default customRouter;
