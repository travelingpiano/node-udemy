const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Sending</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    }

    if (url === '/message' && method === 'POST') {
        // listen to data event, like a buffer/"bus stop" to read data
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // when all data has been read
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            // writeFile is the async (i.e. the execution and callback will be done later) vs writeFileSync which does it right away
            fs.writeFile('message.txt', parsedBody, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // console.log(req);
    res.setHeader('Content-Type', 'text/html');
    // write allows us to write some data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write(`<body><h1>Hello from my Node.js Server! ${req.body}</h1></body>`);
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;



// exporting multiple things
/*
module.exports = {
    handler: requestHandler,
    someText: "Hard coded text"
}*/

// module.exports.handler = requestHandler;
// module.exports.someText = "Hard coded text";

// can remove module, this is supported by just Node.js
// exports.handler = requestHandler;