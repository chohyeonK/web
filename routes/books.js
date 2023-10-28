var express = require('express');
var router = express.Router();

/* 도서검색 page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName: 'books/search.ejs' });
});

/* 장바구니 page. */
router.get('/cart', function(req, res, next) {
  res.render('index', { title: '장바구니', pageName: 'books/cart.ejs' }); // 시험
});
module.exports = router;
