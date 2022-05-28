const express = require('express');
const app = express();
var bodyParser = require('body-parser');
require('dotenv').config();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello");
});
app.use('/', require('./Routes/send-mail'));
app.listen(PORT, console.log(`Listerning server at port ${PORT}`))