const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3030;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const imageUpload = require('./Src/Router/ImageUploadApi');
const videoUpload = require('./Src/Router/VideoUploadApi');

app.use('/', imageUpload);
app.use('/', videoUpload);
app.listen(port, console.log(`Listerning server at port ${port}`));