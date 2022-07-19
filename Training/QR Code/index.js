const express = require("express");
const bodyParser = require("body-parser");
const qrcode = require("qrcode");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});
app.post("/scan", (req, res) => {
    const url = req.body.url;
    if (url.length === 0) res.send("Empty Data!");
    qrcode.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
        res.render("scan", { src });
    });
});
app.listen(port, () => console.log("Server at 3000"));