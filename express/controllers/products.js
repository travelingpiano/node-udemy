const products = [];

exports.getAddProduct = (req, res, next) => {
    console.log('Adding some products');
    res.render('add-product', {
        pageTitle: "Adding a new book",
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })
};

exports.postAddProduct = (req, res) => {
    products.push({title: req.body.title})
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    console.log('Products inputted thus far');
    console.log(products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // don't include slashes (e.g. '/' since it's different between OS)
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
};