import express from 'express';
import constants from 'config/constants';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';

const { PORT } = constants;
const app = express();

registerRoutes(app);
registerMiddlewares(app);

export default app;
