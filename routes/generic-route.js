/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose, router) {
    //Link routes and functions

    //GET - Return all users in the DB
    router.get('/:entity', function (req, res) {
        var db = mongoose.model(req.params.entity);
        db.find(function (err, users) {
            if (!err) {
                console.log('GET /user');
                res.send(users);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    });
    //GET - Return a user with specified ID
    router.get('/:entity/:id', function (req, res) {
        var db = mongoose.model(req.params.entity);
        db.findById(req.params.id, function (err, user_) {
            if (!err) {
                console.log('GET /user/' + req.params.id);
                res.send(user_);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    });
    //POST - Insert a new user in the DB
    router.post('/:entity', function (req, res) {
        var db = mongoose.model(req.params.entity);
        console.log('POST');
        console.log(req.body);

        var user_ = new db(req.body);

        user_.save(function (err) {
            if (!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(user_);
    });
    //PUT - Update a register already exists
    router.put('/:entity/:id', function (req, res) {
        var db = mongoose.model(req.params.entity);
        db.findById(req.params.id, function (err, user_) {
            for (var attr in req.body) {
                user_[attr] = req.body[attr] || user_[attr];
            }

            user_.save(function (err) {
                if (!err) {
                    console.log('Updated');
                } else {
                    console.log('ERROR: ' + err);
                }
                res.send(user_);
            });
        });
    });
    //DELETE - Delete a TVShow with specified ID
    router.delete('/:entity/:id', function (req, res) {
        var db = mongoose.model(req.params.entity);
        db.findById(req.params.id, function (err, user_) {
            user_.remove(function (err) {
                if (!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    });

};