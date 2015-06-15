var express = require('express');
var router = express.Router();
var builds = require('../config/assetbuilds.json');

/* GET landing page. */
router.get('/', function(req, res) {
  var prod_js = [{ path: '/client/' + builds.js }];
  var dev_js = [
    { path: '/client/app.js' },
    { path: '/client/components/googleSheetsHelper/googleSheetsHelper.js' },
    { path: '/client/components/copycat/copycat.js' },
    { path: '/client/views/landing/landing.js' },
    { path: '/client/views/about/about.js' },
    { path: '/client/views/archive/archive.js' },
    { path: '/client/views/gallery/gallery.js' },
    { path: '/client/views/newsarchive/newsarchive.js' },
    { path: '/client/views/sponsors/sponsors.js' },
    { path: '/client/views/art/art.js' }
  ];
  var prod_css = [{ path: '/client/' + builds.css }];
  var dev_css = [
    { path: '/client/bootstrap-3.3.4-dist/css/bootstrap.css' },
    { path: '/client/app.css' }
  ];


  res.render('index', {
    title: 'Napa Art Walk',
    assets: {
      js: process.env.NODE_ENV == 'development' ? dev_js : prod_js,
      css: process.env.NODE_ENV == 'development' ? dev_css : prod_css
    }
  });
});

module.exports = router;
