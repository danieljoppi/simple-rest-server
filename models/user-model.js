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
        email: { type: String },
        location: { type: String },
        locationRange: { type: Number },
        facebookConnect: { type: Boolean },
        linkedinConnect: { type: Boolean },
        photo: { type: String }
    });

    mongoose.model('user', schema_);
};