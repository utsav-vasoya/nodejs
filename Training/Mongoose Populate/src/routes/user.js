const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require("../schema/user_schema");
const Post = require("../schema/post_schema");

router.post('/user', (req, res) => {
    const newuser = new User({
        username: req.body.username
    })
    newuser.save()
        .then((result) => {
            res.send(result);
        }).catch((err) => console.log(err));
})

router.post('/post/:_id', (req, res) => {
    const newuser = new Post({
        title: req.body.title,
        postedBy: req.params._id
    })
    newuser.save()
        .then((result) => {
            res.json(result);
        }).catch((err) => console.log(err));
})

router.get('/', (req, res) => {
    Post.find({})
        .populate('postedBy', { username: 1, _id: 0 })
        .then(p => res.send(p))
        .catch(error => console.log(error));
})

module.exports = router;