/**
 * Created by daniel.joppi on 12/4/14.
 */
module.exports = function(mongo) {
    var Server = mongo.Server,
        Db = mongo.Db;

    var server = new Server('localhost', 27017, {auto_reconnect: true});
    var db = new Db('simple', server);

    db.open(function(err, db) {
        if(err) {
            console.log("Cannot connect to 'simple' database: "+err);
        } else {
            console.log("Connected to 'simple' database");
        }
    });

    return db;
};