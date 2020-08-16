const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use(userRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
})

app.listen(3000);
