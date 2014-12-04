/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose, Schema) {

    var schema_ = new Schema({
        name: { type: String },
        lastName: { type: String },
        birthday: { type: Date },
        fullName: { type: String },
        photo: { type: String }, // id to image
        email: { type: String },
        location: { type: String },
        locationRange: { type: Number },
        facebookConnect: { type: Boolean },
        linkedinConnect: { type: Boolean }
    });

    mongoose.model('user', schema_);
};