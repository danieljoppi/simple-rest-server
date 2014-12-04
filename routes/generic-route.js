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

        var collection = db.collection(entity);
        collection.find().toArray(function (err, items) {
            if (err) {
                console.log('ERROR: ' + err);
                res.send({entity: entity, status: "error", msg: "" + err});
            } else {
                console.log('GET /' + entity);
                res.send(items);
            }
        });
    });
    //GET - Return a user with specified ID
    router.get('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;

        var collection = db.collection(entity);
        console.log(BSON, BSON.ObjectID);
        collection.findOne({'_id': id}, function (err, item) {
            if (err) {
                res.send({"_id": id, entity: entity, status: "error", msg: "" + err});
            } else {
                console.log('GET /' + entity + '/' + id);
                res.send(item);
            }
        });
    });
    //POST - Insert a new user in the DB
    router.post('/:entity', function (req, res) {
        var entity = req.params.entity;

        var data = req.body;
        var collection = db.collection(entity);
        collection.insert(data, {safe: true}, function (err, result) {
            if (err) {
                res.send({entity: entity, status: "error", msg: "" + err});
            } else {
                console.log('POST /' + entity);
                res.send({"_id": result[0].id, entity: entity, status: "inserted"});
            }
        });
    });
    //PUT - Update a register already exists
    router.put('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;
        var data = req.body;

        var collection = db.collection(entity);
        collection.update({'_id': new BSON.ObjectID(id)}, data, {safe: true}, function (err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({"_id": id, entity: entity, status: "error", msg: "" + err});
            } else {
                console.log('PUT /' + entity + '/' + id);
                res.send({"_id": id, entity: entity, status: "updated"});
            }
        });
    });
    //DELETE - Delete a TVShow with specified ID
    router.delete('/:entity/:id', function (req, res) {
        var entity = req.params.entity;
        var id = req.params.id;

        var collection = db.collection(entity);
        collection.remove({'_id': new BSON.ObjectID(id)}, {safe: true}, function (err, result) {
            if (err) {
                res.send({"_id": id, entity: entity, status: "error", msg: "" + err});
            } else {
                console.log('DELETE /' + entity + '/' + id);
                res.send({"_id": id, entity: entity, status: "deleted"});
            }
        });
    });

};