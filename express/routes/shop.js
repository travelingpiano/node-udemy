const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req, res, next) => {
    console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // don't include slashes (e.g. '/' since it's different between OS)
});

module.exports = router;
