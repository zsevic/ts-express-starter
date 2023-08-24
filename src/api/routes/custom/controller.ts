import { Request, Response } from 'express';
import { getCustomList } from 'src/domain/use-cases/get-custom-list';

export async function getCustomListHandler(
  _: Request,
  res: Response,
): Promise<Response> {
  const customList = await getCustomList();

  return res.json(customList);
}
