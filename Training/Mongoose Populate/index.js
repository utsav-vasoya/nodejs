const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/populate',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const userSchema = new mongoose.Schema({
    username: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model('User', userSchema, 'users');
const Post = mongoose.model('Post', postSchema, 'posts');


Post.find()
    .populate("postedBy")
    .then(p => console.log(p))
    .catch(error => console.log(error));