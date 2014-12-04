/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    // list models
//    require('./company-model.js')(mongoose, Schema);
//    require('./image-model.js')(mongoose, Schema);
//    require('./location-model.js')(mongoose, Schema);
//    require('./user-model.js')(mongoose, Schema);

    mongoose.model('company', new Schema({}), { strict: false });
    mongoose.model('image', new Schema({}), { strict: false });
    mongoose.model('location', new Schema({}), { strict: false });
    mongoose.model('user', new Schema({}), { strict: false });
};