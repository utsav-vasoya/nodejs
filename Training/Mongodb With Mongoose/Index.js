const express = require('express')
const app = express();
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/mongoosedatabase"
const port = 2000;
mongoose.connect(url, () => {
    console.log("Dtabase connected")
})



var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});

var Book = mongoose.model('Book', BookSchema, 'bookstore');

// var book1 =  Book({ name: 'JAVA', price: 1, quantity: 1 });
// book1.save();


//save multiple document to collection
var books = [{ name: 'Mongoose', price: 10, quantity: 10 },
{ name: 'NodeJS', price: 15, quantity: 15 },
{ name: 'Python', price: 20, quantity: 20 }];

Book.collection.insertMany(books,(err, book) => {
    if (err) { return console.log(err) }
    console.log(books);
})

app.listen(port, console.log("Server start"))