import { Router } from 'express';
import { createValidator } from 'express-joi-validation';
import * as customController from './controller';
import { customQuery } from './validation';

const customRouter = Router();
const validator = createValidator();

/**
 * This function comment is parsed by doctrine
 * @route GET /custom
 * @group Custom - Operations about custom
 * @param {string} name.query - name
 * @returns {object} 200 - An array of custom info
 * @returns {Error} 400 - Error validating request query.
 */
customRouter.get('/', validator.query(customQuery), customController.getCustomListHandler);

export default customRouter;
