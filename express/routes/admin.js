const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// executed for every incoming request
// should either call next or return response
router.use('/add-product', (req, res, next) => {
    console.log('Adding some products');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// the next is technically optional
router.use('/product', (req, res) => {
    console.log(req.body['title']);
    res.redirect('/');
});

module.exports = router;
