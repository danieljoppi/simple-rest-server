/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
var compression = require('compression');
var express  = require("express");
var app      = express();
var bodyParser = require('body-parser');

// compress all request
app.use(compression({
    threshold: 1024, // ignore 1Kb
    filter: function(req, res) {
        var ct = res.header('content-encoding');
        console.log('content-encoding - '+res.get('content-encoding'), res.contentType, res.header('content-encoding'));

        return ct === 'gzip';
    }
}));
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
//app.use(multer());

// Start MondgoDB connect
var db = require('./config/database')();

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