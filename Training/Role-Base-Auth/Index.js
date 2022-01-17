require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const passport = require("passport");
const mongoose = require('mongoose');
const port = 3000;

const url = "mongodb://localhost:27017/node-auth";
const app = express();


app.use(bp.json());
app.use(passport.initialize());

require("./Middleware/Passport")(passport);

app.use("/api/users", require("./Router/Book-Router"));
app.use("/api/users", require("./Router/Login-Register"));


mongoose.connect(url, { useUnifiedTopology: true ,useNewUrlParser: true},() => {
  console.log("DataBase Connected")
})

app.listen(port, console.log("Server start"))