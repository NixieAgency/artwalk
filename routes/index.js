var express = require('express');
var router = express.Router();

/* GET landing page. */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  res.render('landing', { title: 'Napa Art Walk' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'Napa Art Walk | About' });
});

/* GET archive page. */
router.get('/archive', function(req, res) {
  res.render('archive', { title: 'Napa Art Walk | Archive' });
});

/* GET gallery page. */
router.get('/gallery', function(req, res) {
  res.render('gallery', { title: 'Napa Art Walk | Gallery' });
});

module.exports = router;
