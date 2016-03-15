var regModel = require("./../routes/model_db").regModel;

module.exports = function(req,res,next){
	console.log("En la session: " + req.session.user_id);
	if(!req.session.user_id){
		res.redirect("/");
	}
	else{
		regModel.findById(req.session.user_id,function(err,entrie){
			if(err){
				console.log(err);
				res.redirect("/");
			}
			else{
				res.locals = {entrie: entrie};
				next();
			}
		});
		
	}
}