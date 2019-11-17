import { query } from 'express-validator';

export const customQuery = [
  query('name').isLength({ min: 5 }).optional(),
];
