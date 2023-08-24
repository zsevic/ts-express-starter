import { errors } from 'celebrate';
import express from 'express';
import expressOasGenerator from 'express-oas-generator';
import { isEnv } from 'utils';
import { errorHandler } from './middlewares/error-handler';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';

const app = express();
registerMiddlewares(app);
registerRoutes(app);
app.use(errors());
app.use(errorHandler);
if (isEnv('development')) {
  expressOasGenerator.init(app, {});
}

export default app;
