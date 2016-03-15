var i18n = require('i18n');
var settings = require('./../settings');

i18n.configure({
    // setup some locales - other locales default to en silently
    locales:['en', 'es'],

    // where to store json files - defaults to './locales' relative to modules directory
    directory: settings.BASE_DIR.LOCALES,

    defaultLocale: settings.LANGUAGE_CODE,

    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    cookie: 'lang',
});

module.exports = function(req, res, next) {

    i18n.init(req, res);
    res.locals.__= res.__;

    var current_locale = i18n.getLocale();

    return next();
};