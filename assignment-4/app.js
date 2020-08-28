const express = require('express');
const admin = require('./routes/admin');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(admin.router);

app.use('/users', (req, res) => {
    res.render('users', {users: admin.users, pageTitle: 'Users', path: '/users'});

});

app.listen(3000);
