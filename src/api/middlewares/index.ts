import cors from 'cors';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { isEnv } from 'src/utils';

export default (app): void => {
  if (isEnv('production')) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cors());

  if (isEnv('development')) {
    app.use(morgan('dev'));
  }
};
