import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import * as customController from './controller';
import { customQuery } from './validation';

const customRouter = Router();
const validator = createValidator();

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

customRouter.get('/', validator.query(customQuery), customController.getCustomListHandler);

export default customRouter;
