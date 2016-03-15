var settings = require('./../../global/settings')
var errdb = require('./../../global/error/errorhandlerbd');
//var mongoose = require("mongoose");
var conect = module.exports ={};

conect.Conecction = function(mongoose){
	var env = process.env.NODE_ENV;
	var stringConect = 'mongodb://';
	
	if (env === 'production') {
		stringConect +=  settings.DATBASES.MONGODB.PROD.URI + '/' + settings.DATBASES.MONGODB.PROD.DB
	}
	else if (env === 'test'){
		stringConect +=  settings.DATBASES.MONGODB.TEST.URI + '/' + settings.DATBASES.MONGODB.TEST.DB
	}
	else{
		stringConect +=  settings.DATBASES.MONGODB.DEV.URI + '/' + settings.DATBASES.MONGODB.DEV.DB
	}

	mongoose.connect(stringConect, errdb.errConectionBD);

};