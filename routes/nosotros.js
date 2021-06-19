var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nosotros', { title: 'hola soy nosotros',
subtitulo: 'esto es una prueba de nosotros'
 });
});

module.exports = router;