var message = require('./../constants/message');
var errBD = module.exports = {};

errBD.errConectionBD = function(err) {
    if(err) 
    	console.log('MongoDB: ' + message.MESJERRDB.NUMBER + ' - ' +  message.MESJERRDB.MESSAG + ' -> ' + err);
    else 
    	console.log('MongoDB: ' + message.MESJEXTDB.NUMBER + ' - ' +  message.MESJEXTDB.MESSAG);
}