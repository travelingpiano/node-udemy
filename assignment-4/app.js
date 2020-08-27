const express = require('express');
const admin = require('./routes/admin');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(admin.router);

app.use('/users', (req, res) => {
    res.render('users', {users: admin.users});

});

app.listen(3000);
