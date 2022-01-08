const express = require('express');
const multer = require('multer');
const imageStorage = multer.diskStorage({
    destination: 'images',
    filename: (req, file, callback) => {
        callback(null, file.fieldname + file.originalname);
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 100000
    },
    fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return callback(new Error('Please upload a Image'))
        }
        callback(null, true)
    }
});
module.exports = imageUpload;
