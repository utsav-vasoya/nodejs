const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('pages/home.ejs')
})


app.listen(port, console.log("Server Starting"))