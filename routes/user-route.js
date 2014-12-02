/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
    //File: routes/tvshows.js
module.exports = function(router) {

    var user = require('../models/user-model.js');

    //Link routes and functions

    //GET - Return all users in the DB
    router.get('/user', function(req, res) {
        user.find(function(err, users) {
            if(!err) {
                console.log('GET /user');
                res.send(users);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    });
    //GET - Return a user with specified ID
    router.get('/user/:id', function(req, res) {
        user.findById(req.params.id, function(err, user_) {
            if(!err) {
                console.log('GET /user/' + req.params.id);
                res.send(user_);
            } else {
                console.log('ERROR: ' + err);
            }
        });
    });
    //POST - Insert a new user in the DB
    router.post('/user', function(req, res) {
        console.log('POST');
        console.log(req.body);

        var user_ = new User({
            name:     req.body.name,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            fullName: req.body.fullName
        });

        user_.save(function(err) {
            if(!err) {
                console.log('Created');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(user_);
    });
    //PUT - Update a register already exists
    router.put('/user/:id', function(req, res) {
            user.findById(req.params.id, function(err, user_) {
                user_.name     = req.body.name     || user_.name;
                user_.lastName = req.body.lastName || user_.lastName;
                user_.birthday = req.body.birthday || user_.birthday;
                user_.fullName = req.body.fullName || user_.fullName;

                user_.save(function(err) {
                    if(!err) {
                        console.log('Updated');
                    } else {
                        console.log('ERROR: ' + err);
                    }
                    res.send(user_);
                });
            });
        });
    //DELETE - Delete a TVShow with specified ID
    router.delete('/user/:id', function(req, res) {
        user.findById(req.params.id, function(err, user_) {
            user_.remove(function(err) {
                if(!err) {
                    console.log('Removed');
                } else {
                    console.log('ERROR: ' + err);
                }
            })
        });
    });

};