/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose, Schema) {

    var schema_ = new Schema({
        name: { type: String },
        photo: { type: String }, // id to image
        text: { type: String }
    });

    mongoose.model('company', schema_);
};