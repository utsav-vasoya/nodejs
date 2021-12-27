require('dotenv').config()
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const passport = require('passport');
const url = "mongodb://localhost:27017/role-base"
const port = 3000;
const bodyParser = require('body-parser')
app.use(passport.initialize());

const psp = require("./Middleware/Authenticate")(passport);



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(url, () => {
    console.log("DataBase Connected")
})
app.use('/', require('./Router/Login'))
app.listen(port, console.log("Server start"))