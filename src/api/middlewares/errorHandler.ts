import { NextFunction, Request, Response } from 'express';

export async function errorHandler (err: any, req: Request, res: Response, next: NextFunction) {
  res.status(err.output.statusCode).send(err.output.payload.message);
}
