import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export default function registerMiddlewares(app) {
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(morgan('dev'));
}
