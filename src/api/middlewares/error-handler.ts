import { Boom, isBoom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';
import { logger } from 'src/utils/logger';

export function errorHandler(
  err: Boom,
  _: Request,
  res: Response,
  next: NextFunction,
): Response {
  // eslint-disable-line @typescript-eslint/no-unused-vars
  if (isBoom(err)) {
    return res.status(err.output.statusCode).send(err.output.payload.message);
  }
  logger.error(err, 'Server error');
  return res.send(500).send('Internal server error');
}
