const express = require('express');
const router = express.Router();
const videoUpload = require('../VideoUpload/VideoUpload');

router.post('/uploadVideo', videoUpload.single('video'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});

router.post('/uploadMultipleVideo', videoUpload.array('videos', 5), (req, res) => {
    res.send(req.files)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});
module.exports = router;