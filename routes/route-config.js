/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(router, mongoose) {

    router.all('/', function(req, res, next) {
        // set origin policy etc so cross-domain access wont be an issue

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  Content-Type, Accept");
        console.log(req.body);
        next();
    });

    router.get('/', function(req, res) {
        res.send("server online...");
    });

    // list routes
    require('./generic-route.js')(router, mongoose);
    require('./image-route.js')(router, mongoose);
};