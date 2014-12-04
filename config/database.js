/**
 * Created by daniel.joppi on 12/4/14.
 */
module.exports = function(mongo) {
    var mongo = require('mongodb');
    var Server = mongo.Server;
    var Db = mongo.Db;

    var server = new Server('localhost', 27017, {auto_reconnect: true});
    var db = new Db('simple', server, {safe: true});

    db.open(function(err, db) {
        if(err) {
            console.log("Cannot connect to 'simple' database: "+err);
        } else {
            console.log("Connected to 'simple' database");

            //populate DB
            require('../data/populate-db-config')(db);
        }
    });

    return db;
};