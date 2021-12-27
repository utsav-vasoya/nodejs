const mongoose = require("mongoose");
const userdata = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }

})



module.exports = mongoose.model("User", userdata, "userdata")