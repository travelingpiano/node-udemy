const http = require('http'); // look for global module called http

function rqListener(req, res) {
    console.log(req.url, req.method, req.headers);
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    // write allows us to write some data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);