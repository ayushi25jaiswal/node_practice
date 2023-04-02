const express = require('express');

const router = express.Router();

router.post('/products',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
    
});

router.get('/add-products',(req, res, next) => {
    res.send('<form action="/products" method = "POST"><input type="text" name="title" /><button type="submit">Submit</button> </form>')
});

module.exports = router;