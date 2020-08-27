const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'express/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(userRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
})

app.listen(3000);
