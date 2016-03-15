var settings = require('./../settings').LANGUAGE_CODE;
var i18n = require('./../i18n/locales/' + settings);

var message = {
	MESJERR500:{
		NUMBER: 500,
		MESSAG: 'errApp.err500'
	},
	MESJERR404:{
		NUMBER: 404,
		MESSAG: 'errApp.err400'
	},

	MESJERRDB:{
		NUMBER: 0001,
		MESSAG: i18n.errApp.errDB0001
	},

	MESJEXTDB:{
		NUMBER: 0000,
		MESSAG: i18n.successApp.msjConDB
	}

}

module.exports = message;