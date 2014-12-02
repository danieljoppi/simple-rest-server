/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
var express  = require("express"),
    app      = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
//app.use(multer());

var port = process.env.PORT || 80; 		// set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

var routes = require('./routes/route-config')(router);

mongoose.connect('mongodb://localhost/simple', function(err, res) {
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    } else {
        console.log('Connected to Database');
    }
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('start server on port ' + port);