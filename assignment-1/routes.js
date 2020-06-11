const users = ['User 1', 'User 2', 'User 3'];

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<h1>Welcome!</h1>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return;
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<ul>');
        users.forEach(user => {
            res.write(`<li>${user}</li>`);
        })
        res.write('</ul>');
        res.write('</html>');
        res.end();
        return;
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const value = parsedBody.split('=')[1];
            console.log(value);
            users.push(value);
            res.statusCode = 302;
            res.setHeader('Location', '/users');
            res.end();
            return;
        })
    }
}

module.exports = requestHandler;