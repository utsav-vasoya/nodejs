var mongoose = require('mongoose');
var User = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
});

module.exports = mongoose.model('User', User);