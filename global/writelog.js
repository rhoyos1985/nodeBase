var settings = require('./settings');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var writelog = module.exports = {};

if(process.env.NODE_ENV === 'production'){
	writelog.log = FileStreamRotator.getStream(settings.ACCESLOGSTREAMROTATOR);
}else{
	writelog.log = fs.createWriteStream(settings.ACCESLOGSTREAM, {flags: 'a'});
};

writelog.logServer = function(msj){
	fs.writeFileSync(settings.FILELOGSERVER, msj, 'utf8');
};