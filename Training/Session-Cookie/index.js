const express = require("express")
const session = require('express-session')
const app = express()
var PORT = process.env.port || 3000
app.use(session({
    secret: 'sdsdsdadsadsdsdsh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 5000
    }
}));
app.get("/", (req, res) => {
    req.session.name = 'GeeksforGeeks'
    return res.send("Session Set")
});
app.get("/session", function (req, res) {
    var name = req.session.name
    return res.send(name)
    // req.session.destroy(function(error){
    //     console.log("Session Destroyed")
    // })
});
app.listen(PORT, function (error) {
    if (error) throw error
    console.log("Server created Successfully on PORT :", PORT)
});
