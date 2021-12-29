const express = require("express");
var base64 = require('base-64');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.get('/encode', (req, res) => {
    const data = req.body;
    res.json({ "Encoded Name": Buffer.from(data.name).toString('base64') });
    // console.log(Buffer.from(data.name).toString('base64'));
});



app.get('/decode', (req, res) => {
    const data = req.body;
    res.json({
        "Decoded Name": Buffer.from(data.name, 'base64').toString('utf8')
    });
    // console.log({ "Name ": Buffer.from(data.name, 'base64').toString('utf8') });
});
app.listen(port, console.log(`server start ${port}`));