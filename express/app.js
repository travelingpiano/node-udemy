const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();
const errorsController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'express/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(userRouter);

app.use(errorsController.get404);

app.listen(3000);
