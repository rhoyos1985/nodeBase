var routers = {};

routers.useapp =  function(app,urls){

	for (key in urls){
		app.use(key,urls[key]);
	}

};

module.exports = routers;