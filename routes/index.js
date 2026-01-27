var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'html', 'sunshine_to_go_menu.html'), { title: 'SunshineToGo' });
});

/* GET game page*/
router.get('/frontend', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'Gameplay', 'index.html'), { title: 'SunshineToGo' });
});

module.exports = router;
