const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

var Users = mongoose.model('User', userSchema, 'users');
var Posts = mongoose.model('Post', postSchema, 'posts');

module.exports = { Users, Posts };