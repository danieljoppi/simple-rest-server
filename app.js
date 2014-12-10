/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
var compression = require('compression');
var express  = require("express");
var app      = express();
var bodyParser = require('body-parser');

// compress all request
app.use(compression());
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
//app.use(multer());
// session manager
app.use(session({secret: 'muitobala#1', saveUninitialized: true, resave: true}));

// Session-persisted message middleware
app.use(function(req, res, next){
    var err = req.session.error,
        msg = req.session.notice,
        success = req.session.success;

    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;

    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;

    next();
});

// Start MondgoDB connect
var db = require('./config/database')();

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 		// get an instance of the express Router

var routes = require('./routes/route-config')(router, db);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================

var port = process.env.PORT || 80; 		// set our port
app.listen(port);
console.log('start server on port ' + port);