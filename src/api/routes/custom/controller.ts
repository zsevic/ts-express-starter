import { Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { getCustomList } from 'domain/use_cases/getCustomList';
import { CustomRequestSchema } from './validation';

export async function getCustomListHandler(
  _: ValidatedRequest<CustomRequestSchema>,
  res: Response,
): Promise<Response | void> {
  const customList = await getCustomList();

  return res.json(customList);
}
