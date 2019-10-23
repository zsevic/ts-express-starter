import { Router } from 'express';
import * as customController from './controller';

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

routes.get('/', customController.getCustomListHandler);

export default routes;
