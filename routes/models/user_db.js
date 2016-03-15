var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var constants = require('./../..global/constants/message').TXTUSERDB;

/*=========================================================================================
	Conexión a Base de Datos con Mongoose
  =========================================================================================*/
  //mongoose.connect("mongodb://localhost/fotos");

  var posibles_valores = ["M","F"];
  var email_match = [/^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, constants.MSJERRUSERDB.ERRUSER_EMAIL.MESSAG.ESP];
  var password_validation = {
  		validator: function(p){
  			return this.password_confirmation == p;
  		},
  		message: constants.MSJERRUSERDB.ERRUSER_PASS.MESSAG.ESP
  };

var user_schema = new Schema({
	name: String,
	username: {type:String, required:true, maxlength:[50, constants.MSJERRUSERDB.MJSERRMAXGN.ESP %(constants.LBLS.LBLUSERNAME.ESP,50)]},
	password: {
		type:String, 
		required:true, 
		minlength:[8,constants.MSJERRUSERDB.MJSERRMINGN.ESP %(constants.LBLS.LBLUSERNAME.ESP,8)],
		validate: password_validation		
	},
	age: {type:Number,min:[5, "La edad no puede ser menor que 5"],max:[100, "La edad no puede ser mayor que 100"]},
	email: {type:String, required:"El correo es obligatorio", match: email_match},
	date_of_birth: Date,
	sex: {type:String, enum:{values: posibles_valores, message: "Opción no válida"}}
});

user_schema.virtual("password_confirmation").get(function(){
	return this.pass;
}).set(function(pass){
	this.pass = pass;
});

var User  = mongoose.model("User", user_schema);
module.exports.User = User;

/* Tipos de Datos para guardar en mongo db a traves de monggose
	String
	Number
	Date
	Buffer
	Boolean
	Mixed
	Objectid
	Array
*/