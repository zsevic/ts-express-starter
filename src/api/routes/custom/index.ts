import { Router } from 'express';
import * as customController from './controller';

const routes = Router();

routes.get('/', customController.getCustomListHandler);

export default routes;
