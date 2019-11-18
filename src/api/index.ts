import express from 'express';
import registerApiDocs from 'express-swagger-generator';
import { options } from 'config/swagger';
import registerMiddlewares from './middlewares';
import registerRoutes from './routes';

const app = express();

registerApiDocs(app)(options);
registerMiddlewares(app);
registerRoutes(app);

export default app;
