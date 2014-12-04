/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(router, db) {
    var BSON = db.bson;
    //Link routes and functions

    //GET - Return all users in the DB
    router.get('/:entity', function (req, res) {
        var entity = req.params.entity;

        db.collection(entity, function(err, collection) {
            collection.find().toArray(function(err, items) {
                if (err) {
                    console.log('ERROR: ' + err);
                    res.send({entity: entity, status: "error", error: err});
                } else {
                    console.log('GET /'+entity);
                    res.send(items);
                }
            });
        });
    });
    //GET - Return a user with specified ID
    router.get('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;

        db.collection(entity, function(err, collection) {
            if(!collection) {
                res.send({"_id": id, entity: entity, status: "error", error: err});
                return;
            }

            collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
                if (err) {
                    console.log('GET /'+entity+'/' + id);
                    res.send({"_id": id, entity: entity, status: "error", error: err});
                } else {
                    res.send(item);
                }
            });
        });
    });
    //POST - Insert a new user in the DB
    router.post('/:entity', function (req, res) {
        var entity = req.params.entity;

        var data = req.body;
        db.collection(entity, function(err, collection) {
            collection.insert(data, {safe:true}, function(err, result) {
                if (err) {
                    res.send({entity: entity, status: "error", error: err});
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.send({"_id": result[0].id, entity: entity, status: "inserted"});
                }
            });
        });
    });
    //PUT - Update a register already exists
    router.put('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;
        var data = req.body;

        db.collection(entity, function(err, collection) {
            collection.update({'_id':new BSON.ObjectID(id)}, data, {safe:true}, function(err, result) {
                if (err) {
                    console.log('Error updating wine: ' + err);
                    res.send({"_id": id, entity: entity, status: "error", error: err});
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send({"_id": id, entity: entity, status: "updated"});
                }
            });
        });
    });
    //DELETE - Delete a TVShow with specified ID
    router.delete('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;

        db.collection(entity, function(err, collection) {
            collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({"_id": id, entity: entity, status: "error", error: err});
                } else {
                    console.log('' + result + ' document(s) deleted');
                    res.send({"_id": id, entity: entity, status: "deleted"});
                }
            });
        });
    });

};