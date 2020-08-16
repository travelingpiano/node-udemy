const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');

const app = express();

app.use(adminRouter);

app.use(userRouter);

app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000);
