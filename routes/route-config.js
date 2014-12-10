/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(router, db) {

    router.all('*', function(req, res, next) {
        console.log(req.route, JSON.stringify(req.headers));

        // set origin policy etc so cross-domain access wont be an issue
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  Content-Type, Accept");
        res.header("Content-Type", "application/json");

        res.header('Last-Modified', (new Date()).toUTCString());
        //res.header('Cache-Control', 'public, max-age=60');

        res.statusCode = 200;
        next();
    });

    router.get('/', function(req, res) {
        res.send({status: "on", msg: "server online"});
    });

    // list routes
    require('./image-route.js')(router, db);
    require('./generic-route.js')(router, db);
};