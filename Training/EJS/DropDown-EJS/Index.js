const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('pages/home.ejs')
})

app.get('/home/:utsav', (req, res) => {
    var para = req.params.utsav;
    res.render('pages/name.ejs', { paras: para })
})

app.get('/home/:yasin', (req, res) => {
    var para = req.params.yasin;
    res.render('pages/name.ejs', { paras: para })
})

app.get('/home/:raj', (req, res) => {
    var para = req.params.raj;
    res.render('pages/name.ejs', { paras: para })
})
app.listen(port, console.log("Server Starting"))