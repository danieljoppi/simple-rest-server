/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose, Schema) {
    var schema_ = new Schema({
        name: { type: String }
    });

    mongoose.model('user', schema_);
};