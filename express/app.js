const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// executed for every incoming request
// should either call next or return response
app.use('/add-product', (req, res, next) => {
    console.log('Adding some products');
    res.send('<form action="/product" method="post"><input text="text" name="title"><button type="submit">Add Product</button></form>');
});

// the next is technically optional
app.use('/product', (req, res) => {
    console.log(req.body['title']);
    res.redirect('/');
});

app.use((req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);