const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const app = express();
const port = 3000;

const storage = multer.memoryStorage();
var upload = multer({ storage: storage });
app.post('/upload', upload.single('image'),async (req, res) => {
    fs.access('./data/uploads',(err)=>{
        if(err){
            fs.mkdirSync('./data/uploads');
        }
    });
       await sharp(req.file.buffer)
        .resize(400,200)
        .toFile('./data/uploads/' + req.file.originalname)
        res.send(req.file);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})