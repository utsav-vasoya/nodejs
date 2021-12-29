const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/TaskEJS", (err, res) => {
    if (err) throw new err;
    console.log("database connected")
});

app.use(express.json());
app.use('/', require('./Router/InsertData'));

app.listen(port, () => {
    console.log("server start")
})