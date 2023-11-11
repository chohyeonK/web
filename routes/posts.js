var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '게시판', pageName: 'posts/list.ejs' });
});

/* GET home page. */
router.get('/insert', function(req, res, next) {
    res.render('index', { title: '글쓰기', pageName: 'posts/insert.ejs' });
});

module.exports = router;
