const express = require('express');
const app = express();
const port = 3000;



const userdata = [
    { firstname: "Utsav", age: 20 },
    { firstname: "Raj", age: 25 },
    { firstname: "Ravi", age: 30 }
]

app.get('/', (req, res) => {

  const Userdata=  userdata.map((result) => {
        return result;
    })
    res.status(200).send(Userdata);
})

app.listen(port, console.log("server starting"))

