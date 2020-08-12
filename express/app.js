const express = require('express');

const app = express();

// executed for every incoming request
// should either call next or return response
app.use((req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);