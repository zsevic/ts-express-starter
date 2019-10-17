import { Request, Response } from 'express';
import { getCustomList } from 'domain/use_cases/getCustomList';

export async function getCustomListHandler(req: Request, res: Response): Promise<void> {
  const customList = await getCustomList();

  res.json(customList);
}
