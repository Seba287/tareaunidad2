var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'hola soy servicios',
subtitulo: 'esto es una prueba de servicios'
 });
});

module.exports = router;