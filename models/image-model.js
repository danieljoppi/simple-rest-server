/**
 * Created by daniel.joppi on 12/4/14.
 */
module.exports = function(mongoose, Schema) {
    var attachments = require('mongoose-attachments');

    var schema_ = new Schema({
        title: String,
        description: String
    });

    schema_.plugin(attachments, {
        directory: 'achievements',
        storage: {
            providerName: 's3',
            options: {
                key: '<key>',
                secret: '<secret>',
                bucket: '<bucket>'
            }
        },
        properties: {
            image: {
                styles: {
                    original: {
                        // keep the original file
                    },
                    small: {
                        resize: '150x150'
                    }
                }
            }
        }
    });

    mongoose.model('image', schema_);
};
