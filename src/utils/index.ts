import { NextFunction, Request, Response } from 'express';

export function asyncWrap(fn: (req: Request, res: Response) => Promise<void>) {
  return async function wrappedFn(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      await fn(req, res);
    } catch (err) {
      next(err);
    }
  };
}

export function isEnv(environment: string): boolean {
  return process.env.NODE_ENV === environment;
}
