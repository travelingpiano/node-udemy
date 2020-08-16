const express = require('express');

const router = express.Router();

// executed for every incoming request
// should either call next or return response
router.use('/add-product', (req, res, next) => {
    console.log('Adding some products');
    res.send('<form action="/product" method="post"><input text="text" name="title"><button type="submit">Add Product</button></form>');
});

// the next is technically optional
router.use('/product', (req, res) => {
    console.log(req.body['title']);
    res.redirect('/');
});

module.exports = router;
