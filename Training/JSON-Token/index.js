require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/JWTToken";
mongoose.connect(url, () => {
    console.log('Mongodb Connected');
})

app.use(express.json());

app.use('/', require('./Routes/User'))
app.listen(port, console.log(`server start ${port}`))