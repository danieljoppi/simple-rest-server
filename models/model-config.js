/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(app, mongoose) {
    var Schema = mongoose.Schema;

    // list models
    require('./company-model.js')(mongoose, Schema);
    require('./image-model.js')(mongoose, Schema);
    require('./location-model.js')(mongoose, Schema);
    require('./user-model.js')(mongoose, Schema);
};