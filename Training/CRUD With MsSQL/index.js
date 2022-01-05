const express = require("express");
const sql = require('mssql')
const app = express();
const port = 1433;

// const sqlConfig = {
//     user: 'sa',
//     password: 'vision',
//     database: 'CRUD_With_MsSQL',
//     server: 'localhost',
// }

let sqlConfig = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: 'vision' // update me
        }
    },
    options: {
        database: 'CRUD_With_MsSQL',
        validateBulkLoadParameters:true,
        encrypt: false,

    }}
sql.connect(sqlConfig, (err) => {

    if (err) {
        console.log(err)
    } else {
        console.log("DataBase Conected");
    }
});
app.listen(port, console.log("Server Starting"));