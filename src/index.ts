import 'tsconfig-paths/register';
import 'src/gateways/database/connection';
import http from 'http';
import app from 'src/api';
import constants from 'src/config/constants';

const { PORT } = constants;

const server = http.createServer(app);
server.listen(PORT);

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.on('listening', onListening);
