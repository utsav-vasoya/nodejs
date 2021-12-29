const express = require('express');
const app = express();
const port = 3000;



const userdata = [
    { Id: 1, name: "Utsav", age: 20, gender: "male" },
    { Id: 2, name: "Rajvi", age: 25, gender: "female" },
    { Id: 3, name: "Ravi", age: 30, gender: "male" },
    { Id: 4, name: "Keval", age: 39, gender: "female" }
]

app.get('/name', (req, res) => {

    const Userdata = userdata.map((result) => {
        return result.name;
    })
    console.log(Userdata)
    res.status(200).send(Userdata);
})

app.get('/', (req, res) => {

    const Userdata = userdata.map((result) => {
        return result;
    })
    console.log(Userdata)
    res.status(200).send(Userdata);
})

app.get('/id', (req, res) => {

    const Userdata = userdata.map((result) => {
        return "Id is " + result.Id + " And Name is " + result.name;
    })
    console.log(Userdata)
    res.status(200).send(Userdata);
})

app.get('/comaname', (req, res) => {

    const Userdata = userdata.map((result) => {
        return result.name;
    })
    console.log(Userdata.toString())
    res.status(200).send(Userdata.toString());
})

app.get('/name/male', (req, res) => {

    const Userdata = userdata.filter((result) => {
        return result.gender === "male";
    }).map((data) => {
        return data.name;
    })
    console.log(Userdata)
    res.status(200).send(Userdata);
})



app.listen(port, console.log("server starting"))

