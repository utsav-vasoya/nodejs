const express = require('express');
require('dotenv').config();
const sendMail = require('./Src/Router/Send-mailApi')
const app = express();
app.use(express.json());



app.use('/', sendMail)

app.listen(process.env.PORT, console.log(`Listerning server at port ${process.env.PORT}`))