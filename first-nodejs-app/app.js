const http = require('http'); // look for global module called http

function rqListener(req, res) {
    console.log(req);
}

const server = http.createServer(rqListener);

server.listen(3000);