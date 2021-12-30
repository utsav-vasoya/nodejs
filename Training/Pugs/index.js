const express = require('express');
const app = express();
const port = 3000;
const pug = require('pug');
app.set('view engine', 'pug')


app.get('/', (req, res) => {
    res.render('home')
});

app.listen(port, () => {
    console.log("server start");
});