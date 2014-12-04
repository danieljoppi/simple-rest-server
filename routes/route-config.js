/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(app, mongoose, router) {

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
    require('./generic-route.js')(mongoose, router);
    require('./image-route.js')(mongoose, router);
};