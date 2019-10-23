import swaggerUi from 'swagger-ui-express';
import { specs } from 'config/swagger';
import customRoutes from './custom';

export default (app) => {
  app.get('/', (req, res) => {
    res.send('Hello world');
  });
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  app.use('/api/custom', customRoutes);
};
