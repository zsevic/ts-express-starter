import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { getCustomList } from 'domain/use_cases/getCustomList';

export async function getCustomListHandler(req: Request, res: Response): Promise<Response> {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const customList = await getCustomList();

  return res.json(customList);
}
