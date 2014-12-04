/**
 * Created by daniel.joppi on 12/4/14.
 */
module.exports = function(mongoose, Schema) {
    var attachments = require('mongoose-attachments-aws2js');

    var schema_ = new Schema({
        title: String,
        description: String
    });

    schema_.plugin(attachments, {
        directory: 'achievements',
        storage: {
            providerName: 'aws2js',
            options: {
                key: '<key>',
                secret: '<secret>',
                bucket: '<bucket>',
               // endpoint: 'https://' + options.bucket + '.s3.amazonaws.com',
                acl: "public-read" // false or "private" by default
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
