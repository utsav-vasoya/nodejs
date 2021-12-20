const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

var data = [
    { name: "Utsav", age: 21 },
    { name: "Parth", age: 25 },
    { name: "Darshan", age: 35 }
];
app.get('/', (req, res) => {
    res.render('Pages/Home.ejs', { datas: data })
})

app.listen(port, console.log("Server Starting"))