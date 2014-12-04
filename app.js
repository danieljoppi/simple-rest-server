/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
var express  = require("express"),
    app      = express(),
    bodyParser = require('body-parser'),
    mongo = require('mongodb');


// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
//app.use(multer());

// Start MondgoDB connect
var db = require('./config/database')(mongo);
//populate DB
require('./data/populate-db-config')(db);

var port = process.env.PORT || 80; 		// set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 		// get an instance of the express Router

var routes = require('./routes/route-config')(router, db);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('start server on port ' + port);