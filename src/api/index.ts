import express from 'express';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';

const app = express();

registerMiddlewares(app);
registerRoutes(app);

export default app;
