const express = require('express')
const app = express();
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/bookstore"
const port = 5000;
app.use(express.json());

mongoose.connect(url, () => {
    console.log("DataBase Connected")
})
app.use('/', require('./Router/BookApi'))

app.listen(port, console.log("Server start"))