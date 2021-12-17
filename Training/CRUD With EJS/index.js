const express = require('express');
const ejs = require('ejs')
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')
app.get('/', (req, res) => {

    var month = ['jan', 'feb', 'mar']
    res.render('Home',  { month: month })
})
app.listen(port, console.log("Server Starting"))
