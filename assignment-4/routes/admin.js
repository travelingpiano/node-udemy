const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('add-user');
});

router.post('/add-user', (req, res) => {
    users.push(req.body.user);
    res.redirect('/users');
});

exports.router = router;
exports.users = users;