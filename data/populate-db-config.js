/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(db) {

    var populate = function(entity, data) {
        db.collection(entity, function(err, collection) {
            collection.insert(data, {safe:true}, function(err, result) {
                if (err) {
                    return {"_id": id, status: "error", error: err};
                } else {
                    console.log('Success: ' + JSON.stringify(result));
                    return {"_id": id, status: "inserted"};
                }
            });
        });
    };

    var verify = function(entity, data) {
        db.collection(entity, function(err, collection) {
            collection.find().toArray(function(err, items) {
                if(!items || items.length === 0) {
                    populate(entity, data);
                }
            });
        });
    };

    // list populate data
    require('./companies-data.js')(verify);
    //require('./images-data.js')(verify);
    require('./locations-data.js')(verify);
    require('./users-data.js')(verify);
};