import mongoose from 'mongoose';
import constants from 'config/constants';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

export async function connectToDatabase() {
  try {
    mongoose.connect(constants.MONGODB_URL);
  } catch (err) {
    mongoose.createConnection(constants.MONGODB_URL);
  }

  mongoose.connection
    .once(
      'open',
      (): void => {
        console.log('Connection with database is established');
      },
    )
    .on(
      'error',
      (e: Error): Error => {
        throw e;
      },
    );
}
