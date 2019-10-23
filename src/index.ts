import 'dotenv/config';
import 'tsconfig-paths/register';
import 'gateways/mongodb/connection';
import http from 'http';
import app from 'api';
import constants from 'config/constants';

const { PORT } = constants;

const server = http.createServer(app);
server.listen(PORT);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.on('listening', onListening);
