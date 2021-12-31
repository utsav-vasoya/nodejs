// const express = require('express');
// const router = express.Router();
// const User = require("../schema/user_schema");
const mongoose = require('mongoose');
// router.post('/', (req, res) => {
//     const newuser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         title: req.body.title
//     })
//     newuser.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => console.log(err));
// })

const userSchema = new mongoose.Schema({
    username: String,
    email: String
})

const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

// router.post('/', (req, res) => {
//     const newuser = new User({
//         username: req.body.username,
//         email: req.body.email
//     })
//     newuser.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => console.log(err));
// })

// router.get('/', (req, res) => {
Post.find()
    // .populate('postedBy')
    .then(p => console.log(p))
    .catch(error => console.log(error));
// User.find().populate('postedBy')
//     .then((result) => {
//         res.send(result);
// })

// router.get('/user', (req, res) => {
//     User.find()

//         .then(p => console.log(p))
//         .catch(error => console.log(error));
//     // User.find().populate('postedBy')
//     //     .then((result) => {
//     //         res.send(result);
// })


// module.exports = router;