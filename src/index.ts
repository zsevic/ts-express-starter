import 'tsconfig-paths/register';
import 'src/gateways/database/connection';
import http from 'http';
import app from 'src/api';
import constants from 'src/config/constants';
import { logger } from 'src/utils/logger';

const { PORT } = constants;

const server = http.createServer(app);
server.listen(PORT);

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
}

server.on('listening', onListening);
