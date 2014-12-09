/**
 * Created by daniel.joppi on 12/4/14.
 */

module.exports = function(router, db) {
    var mongo = require('mongodb');
    var Grid = require('gridfs-stream');

    var gfs = Grid(db, mongo);

    // upload image
    router.post('/image', function (req, res) {
        var data = req.body;
        var stream = gfs.createWriteStream({
            filename: data.filename,
            contentType: data.type
        });
        req.pipe(stream);
        res.send(stream);
    });

    // get image to url
    router.get('/image/:id', function (req, res) {
        var stream = gfs.createReadStream({
            _id: req.params.id
        });
        //error handling, e.g. file does not exist
        stream.on('error', function (err) {
            console.log('An error occurred!', err);
            throw err;
        });

        res.header("Content-Type", stream.contentType);
        res.setHeader('Cache-Control', 'no-cache');
        try {
            stream.pipe(res);
            res.statusCode = 200;
        } catch(e) {
            res.statusCode = 500;
        }
    });
};