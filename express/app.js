const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'express/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(userRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(3000);
