const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var { Users, Posts } = require("../schema/user_schema");

router.post('/user', (req, res) => {
    const newuser = new Users({
        username: req.body.username
    })
    newuser.save()
        .then((result) => {
            res.send(result);
        }).catch((err) => console.log(err));
});

router.post('/user/post/:_id', (req, res) => {
    const newuser = new Posts({
        title: req.body.title,
        postedBy: req.params._id
    })
    newuser.save()
        .then((result) => {
            res.json(result);
        }).catch((err) => console.log(err));
});

router.get('/', (req, res) => {
    Posts.find({})
        .populate('postedBy')
        .then(p => res.send(p))
        .catch(error => console.log(error));
});

module.exports = router;