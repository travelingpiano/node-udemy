const express = require('express');

const app = express();

app.use('/favicon.ico', (req, res, next) => {
    res.status(204);
    res.send();
})

app.use((req, res, next) => {
    console.log('something');
    next();
});

app.use((req, res, next) => {
    console.log('something else');
    res.send('<h1>Hi</h1>');
})

app.listen(3000);