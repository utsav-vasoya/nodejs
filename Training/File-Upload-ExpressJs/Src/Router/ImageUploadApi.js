const express = require('express');
const router = express.Router();
var base64 = require('base-64');
var fs = require('fs');
const mime = require('mime');
const imageUpload = require('../ImageUpload/ImageUpload');

router.post('/uploadSingleImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file);
});

router.post('/uploadMultipleImage', imageUpload.array('images', 5), (req, res) => {
    res.send(req.files)
});

router.post('/upload/image', async (req, res, file) => {
    // to declare some path to store your converted image
    var matches = req.body.base64image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer.from(matches[2], 'base64');
    let imageBuffer = response.data;
    let type = response.type;
    let extension = mime.getExtension(type);
    var fileName = "image." + new Date().getTime() + extension;
    try {
        fs.writeFileSync("./images/" + fileName, imageBuffer, 'utf8');
        return res.send({ "status": "success" });
    } catch (e) {
        res.send(e);
    }
});
module.exports = router;