/*
    Archivo de Configuracion de la Aplicación
*/

var path = require('path');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');


var SETTINGS = module.exports = {};

SETTINGS.BASE_DIR = {};


SETTINGS.ROOT_URLCONF   = 'tutorial.urls';
SETTINGS.PORT           = 3000;
SETTINGS.STATIC_URL     = '/public';
SETTINGS.LOCALES        = '/global/i18n/locales';

/* ===========================================================================================================
    Construcción de las rutas de la appBuild paths inside the project like this: os.path.join(BASE_DIR, ...)
   =========================================================================================================== */
SETTINGS.BASE_DIR.DIRNAME       = path.dirname(__dirname);
SETTINGS.BASE_DIR.PUBLIC        = path.join(SETTINGS.BASE_DIR.DIRNAME, SETTINGS.STATIC_URL);
SETTINGS.BASE_DIR.LOGDIRECTORY  = path.join(SETTINGS.BASE_DIR.DIRNAME, 'log');
SETTINGS.BASE_DIR.VIEWS         = ['views', path.join(SETTINGS.BASE_DIR.DIRNAME, 'views')];
SETTINGS.BASE_DIR.STYLUS        = {NAME:'stylus',DIR:SETTINGS.BASE_DIR.PUBLIC}
SETTINGS.BASE_DIR.LOCALES       = path.join(SETTINGS.BASE_DIR.DIRNAME, SETTINGS.LOCALES);

/* ============================================================
    Formato para el log en morgan.
    Posibles valores: combined, common, dev, short, tiny
   ============================================================  */
SETTINGS.LOGGER                 = 'dev';
SETTINGS.ACCESLOGSTREAM         = path.join(SETTINGS.BASE_DIR.LOGDIRECTORY, '/access.log'),
SETTINGS.ACCESLOGSTREAMROTATOR  = {
                                      date_format: 'YYYYMMDD',
                                      filename: path.join(SETTINGS.BASE_DIR.LOGDIRECTORY, '/access-%DATE%.log'),
                                      frequency: 'daily',
                                      verbose: false
                                    };
SETTINGS.FILELOGSERVER = path.join(SETTINGS.BASE_DIR.LOGDIRECTORY, '/serverlog.log');

/* ============================================================
    Configuración para el motor de las vistas
   ============================================================  */
SETTINGS.VIEW_ENGINE = {
                            NAME:'view engine', 
                            ENGINE:'jade'
                        };

/* ============================================================
    Configuración para la session
   ============================================================  */
SETTINGS.SESSION ={
                        DEV:{
                                secret: 'aplication_dev_123456',
                                resave: false,
                                saveUninitialized: false
                            },
                        TEST:{
                                secret: 'aplication_test_123456',
                                resave: false,
                                saveUninitialized: false
                            },
                        PROD:{
                                secret: 'ts7h37x@*#!#h^*fnvp^bkvgee$5ts_ljw8bz$&19d%zdy@t28',
                                resave: false,
                                saveUninitialized: false
                            }
                    };

/* ============================================================
    Configuración Base de Datos
   ============================================================  */
SETTINGS.DATBASES = {
                        MONGODB: {
                                    DEV:{
                                            URI: process.env.MONGO_URI || 'localhost',
                                            DB: 'db1',
                                            PORT: 2701,
                                            USER: '',
                                            PASS: ''
                                        },
                                    TEST:{
                                            URI: process.env.MONGO_URI || 'test.localhost',
                                            DB: 'testdb',
                                            PORT: 2701,
                                            USER: '',
                                            PASS: ''
                                        },
                                    PROD:{
                                            URI: process.env.MONGO_URI || 'prod.localhost',
                                            DB: 'proddb',
                                            PORT: 2701,
                                            USER: '',
                                            PASS: ''
                                    }
                                }
                    };

/*  =======================================================
    Internationalization
    ======================================================= */

SETTINGS.LANGUAGE_CODE = 'es';

SETTINGS.TIME_ZONE = 'UTC';

SETTINGS.USE_I18N = true;

SETTINGS.USE_L10N = true;

SETTINGS.USE_TZ = true;