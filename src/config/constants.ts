const config = {
  MONGODB_URL:
    process.env.MONGODB_URL ||
    'mongodb://localhost:27017/ts-express-starter-db',
  PORT: process.env.PORT || 8080,
};

export default config;
