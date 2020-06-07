const http = require('http'); // look for global module called http
const fs = require('fs');

function rqListener(req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    // write allows us to write some data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1>Hello from my Node.js Server! ${req.body}</h1></body>`);
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);