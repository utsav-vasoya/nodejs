const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    postedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});
module.exports = mongoose.model('Post', postSchema);
