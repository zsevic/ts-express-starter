import mongoose from 'mongoose';
import constants from 'src/config/constants';
import { logger } from 'src/utils/logger';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

mongoose.connection
  .once('open', (): void => {
    logger.info('Connection with database is established');
  })
  .on('error', (error): Error => {
    logger.error(error.reason);
    throw error;
  });
