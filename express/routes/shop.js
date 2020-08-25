const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('Products inputted thus far');
    console.log(adminData.products);
    const products = adminData.products;
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // don't include slashes (e.g. '/' since it's different between OS)
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;
