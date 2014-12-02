/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose, Schema) {

    var userSchema = new Schema({
        name: { type: String },
        lastName: { type: String },
        birthday: { type: Date },
        fullName: { type: String }
    });

    return mongoose.model('User', userSchema);
};