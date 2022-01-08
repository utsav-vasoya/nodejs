const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.get('/', (req, res) => {
    var request = new sql.Request();
    request.query('select * from Student', function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data.recordset);
        }

    })
});

router.post('/user', (req, res) => {
    var request = new sql.Request();
    request.query("INSERT INTO Student VALUES ('" + req.body.Id + "','" + req.body.Name + "','" + req.body.Gender + "','" + req.body.Age + "','" + req.body.Marks + "')", function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
});

router.put('/user/:Id', (req, res) => {
    var request = new sql.Request();
    request.query("UPDATE Student SET [Name] = '" + req.body.Name + "',[Gender] = '" + req.body.Gender + "',[Marks]='" + req.body.Marks + "', [Age] = " + req.body.Age + " WHERE ID = " + req.params.Id, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
});

router.delete('/user/:Id', (req, res) => {
    var request = new sql.Request();
    request.query("DELETE FROM Student   WHERE ID = " + req.params.Id, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
});

module.exports = router;
