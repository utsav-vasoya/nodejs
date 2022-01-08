const express = require('express');
const multer = require('multer');

const videoStorage = multer.diskStorage({
    destination: 'videos',
    filename: (req, file, callback) => {
        callback(null, file.fieldname  + file.originalname)
    }
});

const videoUpload = multer({
    storage: videoStorage,
    limits: {
        fileSize: 10000000000000
    },
    fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(mp4|mkv)$/)) {
            return callback(new Error('Please upload a Video'))
        }
        callback(null, true)
    }
});
module.exports = videoUpload;