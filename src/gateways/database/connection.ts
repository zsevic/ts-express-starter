import mongoose from 'mongoose';
import constants from 'src/config/constants';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

mongoose.connection
  .once('open', (): void => {
    console.log('Connection with database is established');
  })
  .on('error', (e): Error => {
    console.log(e.reason);
    throw e;
  });
