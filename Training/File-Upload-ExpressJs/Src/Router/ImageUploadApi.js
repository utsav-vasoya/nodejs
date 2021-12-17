const express = require('express');
const router = express.Router();
const imageUpload = require('../ImageUpload/ImageUpload');

router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


//Upload Multiple Image
router.post('/uploadMultipleImage', imageUpload.array('images', 2), (req, res) => {
    res.send(req.files)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router;