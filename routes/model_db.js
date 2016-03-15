var mongoose = require("mongoose");
var settings = require('./../global/settings');
var Schema = mongoose.Schema;
require('./bdconecction/conecctionmongodb').Conecction(mongoose);

//mongoose.connect('mongodb://' + settings.DATBASES.MONGODB.URI +'/' + settings.DATBASES.MONGODB.DB);

var Model = new Schema({
	name: String,
	surname: String,
	age: Number
});

var regModel = mongoose.model('Model_name', Model);
module.exports.regModel = regModel;