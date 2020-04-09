import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import { isEnv } from 'utils';

export default (app): void => {
  if (isEnv('production')) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  if (isEnv('development')) {
    app.use(morgan('dev'));
  }
};
