import { Router } from 'express';
import { validationMiddleware } from 'api/middlewares';
import * as customController from './controller';
import { customQuery as customValidation } from './validation';

const routes = Router();

/**
 *  @swagger
 *  tags:
 *    name: Customs
 *    description: Custom management
 */

/**
 *  @swagger
 *  path:
 *    /api/custom/:
 *      get:
 *        summary: Get custom list
 *        tags: [Customs]
 *        responses:
 *          "200":
 *            description: A custom schema
 *            content:
 *              application/json
 */

routes.get('/', customValidation, validationMiddleware, customController.getCustomListHandler);

export default routes;
