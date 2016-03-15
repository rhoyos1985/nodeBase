var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var settings = require('./global/settings');
var writelog = require('./global/writelog');
var fs = require('fs');
var errHandler = require('./global/error/errorhandler')
var urls = require('./routes/config_routers/urls');
var i18n = require('./global/i18n/i18n');
var session = require('express-session');
var session_app = require("./middleware/session");

var app = express();

// view engine setup
app.set(settings.BASE_DIR.VIEWS);
app.set(settings.VIEW_ENGINE.NAME, settings.VIEW_ENGINE.ENGINE);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

//Create log file
fs.existsSync(settings.BASE_DIR.LOGDIRECTORY) || fs.mkdirSync(settings.BASE_DIR.LOGDIRECTORY);

app.use(logger(settings.LOGGER,{stream:writelog.log}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require(settings.BASE_DIR.STYLUS.NAME).middleware(settings.BASE_DIR.STYLUS.DIR));
app.use(express.static(settings.BASE_DIR.PUBLIC));

//Session
app.use(session(settings.SESSION.DEV));

//Languaje
app.use(i18n);

//Add routes
urls(app);

// catch 404 and forward to error handler
app.use(errHandler.ERROR404);
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errHandler.ERRORHANDLER)
}

// production error handler
app.use(errHandler.ERRORPROD)


module.exports = app;
