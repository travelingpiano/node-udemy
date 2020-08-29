const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

// executed for every incoming request
// should either call next or return response
router.get('/add-product', productsController.getAddProduct);

// the next is technically optional
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
