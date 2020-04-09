import { Boom, isBoom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: Boom, req: Request, res: Response,
  next: NextFunction): Response { // eslint-disable-line @typescript-eslint/no-unused-vars
  if (isBoom(err)) {
    return res.status(err.output.statusCode).send(err.output.payload.message);
  }
  console.log('Server error', err);
  return res.send(500).send('Internal server error');
}
