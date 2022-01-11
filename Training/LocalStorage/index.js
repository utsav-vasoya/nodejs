const express = require('express');
const app = express();
const port = 3000;
const localStorage = require('localstorage')
const store = require("store2");


app.get('/', (req, res) => {
    res.send("hello");
    store('Profile', { name: 'Adam', age: 27, salary: 3452 });
   
    console.log(store.setAll({name: 'Adam', age: 34}))
    console.log(store.getAll())
})
app.listen(port, console.log("Server starting"));