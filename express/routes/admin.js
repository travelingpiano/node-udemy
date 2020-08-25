const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// executed for every incoming request
// should either call next or return response
router.get('/add-product', (req, res, next) => {
    console.log('Adding some products');
    res.render('add-product', {pageTitle: "Adding a new book", path: '/admin/add-product'})
});

// the next is technically optional
router.post('/add-product', (req, res) => {
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
