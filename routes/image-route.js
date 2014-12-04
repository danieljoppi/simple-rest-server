/**
 * Created by daniel.joppi on 12/4/14.
 */

module.exports = function(mongoose, router) {
    router.post('/image', function (req, res, next) {
        var image_db = new mongoose.model('image')();
        image_db.title = req.body.title;
        image_db.description = req.body.description;
        var data;
        if (req.body.patch) {
            data = { path: req.body.patch }
        } else {
            data = req.files.image;
        }
        image_db.attach('image', data, function (err) {
            if (err) return next(err);
            image_db.save(function (err) {
                if (err) return next(err);
                console.log('Image has been saved with file!', image_db);
                res.send(image_db['_id']);
            });
        });
    });
};