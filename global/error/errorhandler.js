var constant = require('./../constants/message');
var errhandler = module.exports = {};

/* ========================================================
	Configuración de los errores mostrados
   ======================================================== */
errhandler.ERROR404 = function(req, res, next) {
                        var err = new Error(constant.MESJERR404.MESSAG.ESP);
                        err.status = constant.MESJERR404.NUMBER;
                        //next(err);
                    };
errhandler.ERRORHANDLER = function(err, req, res, next) {
		    				res.status(err.status || constant.MESJERR500.NUMBER);
		    				res.render('error', {
		      										message: err.message,
		      										error: err
		    									});
							};

errhandler.ERRORPROD = function(err, req, res, next) {
	  					res.status(err.status || constant.MESJERR500.NUMBER);
	  					res.render('error', {
	    										message: err.message,
	    										error: {}
	  										});
						};