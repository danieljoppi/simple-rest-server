/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(db) {

    var populate = function(entity, data) {
        db.collection(entity, function(err, collection) {
            collection.insert(data, {safe:true}, function(err, result) {
                if (err) {
                    console.log(entity+' populate fail: '+err);
                } else {
                    console.log(entity+' populate success: ' + JSON.stringify(result));
                }
            });
        });
    };

    var verify = function(entity, data) {
        db.collection(entity, function(err, collection) {
            collection.find().toArray(function(err, items) {
                if (err) {
                    console.log(entity+' verify fail: '+err);
                } else if(!items || items.length === 0) {
                    populate(entity, data);
                } else {
                    console.log(entity+' verify: OK');
                }
            });
        });
    };

    // list populate data
    require('./datadb-companies.js')(verify, db);
    require('./datadb-locations.js')(verify);
    require('./datadb-users.js')(verify);
};