/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(app, mongoose) {
    var Schema = mongoose.Schema;

    // list models
    require('./user-model.js')(mongoose, Schema);
};