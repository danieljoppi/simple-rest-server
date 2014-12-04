/**
 * Created by daniel.joppi on 12/4/14.
 */
module.exports = function(db) {
    var request = require('request');
    var mongo = require('mongodb');
    var Grid = require('gridfs-stream');

    var gfs = Grid(db, mongo);
    return function(image) {
        var stream = gfs.createWriteStream({
            filename: image.name,
            contentType: image.type
        });
        request.get(image.url)
            .on('error', function(err) {
                console.log(err)
            })
            .pipe(stream);
        console.log(stream);
        return stream.id;
    };
};
