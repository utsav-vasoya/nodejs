const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        require: true,

    },
    token: {
        type: String
    }

})

module.exports = mongoose.model("Admin", AdminSchema, 'admin')
