const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;
const path = require('path')

app.set('view engine', 'hbs')
var data={
    name:"Different Languages",
    sports:['JAVA','Node.JS','Python']
}

app.get('/', (req, res) => {
    res.render('homepage',{data:data})
});

app.listen(port, () => {
    console.log("server start");
});