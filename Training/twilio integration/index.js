require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', require('./src/routes/login-verify'));


app.listen(port, () => {
    console.log("Server Start");
});