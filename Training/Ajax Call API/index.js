const express = require('express');
const app = express();
const port = 3000;
app.set("view engine", "ejs");

var order = [
    {
        id: 1,
        name: "James",
        drink: "Coffee"
    },
    {
        id: 2,
        name: "John",
        drink: "Latte"
    }
];
app.get("/", function (req, res) {
    res.render("home");
});
app.post("/orders", function (req, res) {
    res.send(order);
});
app.listen(port, () => {
  console.log("server start");
});