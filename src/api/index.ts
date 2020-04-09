import express from 'express';
import expressOasGenerator from 'express-oas-generator';
import { isEnv } from 'utils';
import { errorHandler } from './middlewares/errorHandler';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';

const app = express();
registerMiddlewares(app);
registerRoutes(app);
app.use(errorHandler);
if (isEnv('development')) {
  expressOasGenerator.init(app, {});
}

export default app;
