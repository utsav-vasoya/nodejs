const express = require("express");
const app = express();
const port = 1433;
const sql = require('mssql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

var config = {
    user: 'sa',
    password: 'vision',
    database: 'demodb',
    server: 'VISION-036\\SQL2019',
    options: {
        trustedconnection: true,
        trustServerCertificate: true,
    }
};
sql.connect(config, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("database conect");
    }
})

app.use('/',require('./routes/user'))
app.listen(port, console.log("Server Starting"));