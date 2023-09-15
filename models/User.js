const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    otp_enabled: {
        type: Boolean,
        default: false,
    },
    opt_verified: {
        type: Boolean,
        default: false,
    },
    otp_ascii: {
        type: String,

    },
    otp_hex: {
        type: String,

    },
    otp_base32: {
        type: String,
    },
    otp_auth_url: {
        type: String,
    }
});


module.exports = model('User', UserSchema);

