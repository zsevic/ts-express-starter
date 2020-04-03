import { Boom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

export function errorHandler(err: Boom, req: Request, res: Response,
  next: NextFunction): void { // eslint-disable-line @typescript-eslint/no-unused-vars
  res.status(err.output.statusCode).send(err.output.payload.message);
}
