import swaggerJsdoc from 'swagger-jsdoc';
import Pack from 'root/package.json';

const swaggerDefinition = {
  info: {
    title: `${Pack.name} API documentation`,
    version: Pack.version,
  },
  host: 'localhost:8080',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  explorer: true,

  apis: ['**/*.ts'],
};

export const specs = swaggerJsdoc(options);
