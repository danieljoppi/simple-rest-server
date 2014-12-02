/**
 * @author daniel.joppi
 * @since 2/12/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
    name: 		{ type: String },
    lastName:   { type: String },
    birthday:   { type: Date },
    fullName: 	{ type: String }
});


module.exports = mongoose.model('User', userSchema);