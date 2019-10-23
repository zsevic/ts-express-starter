import 'dotenv/config';
import 'tsconfig-paths/register';
import app from 'api/server';
import constants from 'config/constants';
import { connectToDatabase } from 'gateways/mongodb/connection';

const { PORT } = constants;

export const init = (server) => {
  server.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);

    connectToDatabase();
  });
};

init(app);
