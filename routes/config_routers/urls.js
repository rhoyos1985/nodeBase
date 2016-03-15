var index = require('./../index');
var users = require('./../users');
var timeout = require('./../timeout');
var routes = require('./routers');


module.exports = function(app){
	var urls = {
				'/': index,
				'/users': users,
				'/users': users,
				'/timeout': timeout
			}

	routes.useapp(app,urls);

}