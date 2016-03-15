var express = require('express');
var router = express.Router();
require('date-utils');

router.get('/timeout', function (req, res, next){
	var start = new Date();
	var end = new Date();
	console.log(start.toFormat('HH:MI PP'));
	console.log('Tiempo Inicial: ' + start.getMinutes());
	console.log('Tiempo Final: ' + end.getMinutes());
	console.log('Comparador de tiempo: ' + Date.compare(end.getMinutes(), start.getMinutes()));

	while (Date.compare(end.getMinutes(), start.getMinutes()) != 7) {
	  //start.add({minutes: 5});
	  end = new Date();
	  //console.log('Comparador de tiempo: ' + Date.compare(end.getMinutes(), start.getMinutes()));

	}

	console.log(end.toFormat('HH:MI PP'));
});

module.exports = router;