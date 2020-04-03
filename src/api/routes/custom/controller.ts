import { NextFunction, Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { getCustomList } from 'domain/use_cases/getCustomList';
import { CustomRequestSchema } from './validation';

export async function getCustomListHandler(req: ValidatedRequest<CustomRequestSchema>,
  res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const customList = await getCustomList();

    return res.json(customList);
  } catch (err) {
    return next(err);
  }
}
