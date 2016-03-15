var express = require('express');
var mongoose = require('mongoose');
var regModel = require('./model_db').regModel;
var router = express.Router();

router.get('/', function(req,res,next){
	regModel.find(function(err,entries){
		if(!err){
			console.log(res.__('name'));
			res.render('index',{
								title: 'RestAPI System with Mongoose and Node/Express',
								footer: '@2015 by M.A.P.S Powered by Node.js, Express, MongoDB',
								entries: entries
								});
		}else{
			console.log(err);
			res.status(500).send('GET Error');
		}
	});
});

router.get('/:id',function (req, res,next){
  regModel.findById(req.params.id, function (err, entry) {
    if (!err) {
      res.send(entry);
    } else {
      console.log(err);
    }
  });
});

router.post('/entries', function (req, res, next){
	var entry;
	console.log("POST: " + req.params + req.body + req.query);
	
	entry = new regModel();
	for (key in req.body){
		entry[key] = req.body[key];
	}
	entry.save(function (err) {
		if (!err) {
			console.log("created");
			res.status(220).send(entry);
		} else {
			console.log(err);
			res.status(500).send('POST error');
		}
	});
});

router.put('/entries/:id', function (req, res){
	console.log(req.body);
	regModel.findById(req.params.id, function (err, entry) {
		for (key in req.body){
			entry[key] = req.body[key];
		}
		entry.save(function (err) {
			if (!err) {
				console.log("updated");
				res.status(201).send({});
			} else {
				console.log(err);
				res.status(500).send("updated error");
			}
		});
	});
});

router.delete('/entries/:id', function (req, res){
	console.log('DELETED: ' + req.params.id);
	regModel.findById(req.params.id, function (err, entry) {
		entry.remove(function (err) {
			if (!err) {
				console.log("removed");
				res.send(201, "Removed: " + req.params.id);
			} else {
				console.log(err);
				res.send(500, "removed error");
			}
		});
	});
});

router.get("/sessions/:id", function(req,res)
{
	console.log("Sessions: " + req.params.id);
	regModel.findById(req.params.id,function(err,entrie){
		console.log("Encontrado: " + entrie._id);
		req.session.user_id = entrie._id;
		console.log("Sessions: " + req.session.user_id);
		res.redirect("/users");
	});
	
});

module.exports = router;
