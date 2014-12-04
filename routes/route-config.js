/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(router, db) {

    router.all('/', function(req, res, next) {
        // set origin policy etc so cross-domain access wont be an issue

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,  Content-Type, Accept");
        res.header("Content-Type", "application/json");
        console.log(req.body);
        next();
    });

    router.get('/', function(req, res) {
        res.send({status: "on", msg: "server online"});
    });

    // list routes
    require('./generic-route.js')(router, db);
    require('./image-route.js')(router, db);
};