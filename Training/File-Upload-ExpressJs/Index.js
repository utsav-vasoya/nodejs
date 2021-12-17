const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3030;
const imageUpload = require('./Src/Router/ImageUploadApi');
const videoUpload = require('./Src/Router/VideoUploadApi');


app.use('/', imageUpload);
app.use('/', videoUpload);

app.listen(port, console.log(`Listerning server at port ${port}`))