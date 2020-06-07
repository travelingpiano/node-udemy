const http = require('http'); // look for global module called http
const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);