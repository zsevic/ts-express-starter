import customRoutes from './custom';

export default (app): void => {
  app.get('/', (req, res) => {
    res.send('Hello world');
  });

  app.use('/api/custom', customRoutes);
};
