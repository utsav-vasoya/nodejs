const express = require('express');
const port = 3000;
const app = express();
const mongoose = require("mongoose");
const { pipeline } = require('stream');
const userdata = require('./Models/userdata');
const url = "mongodb://localhost:27017/mongoose-pipeline"
mongoose.connect(url, () => {
    console.log("databse connected")
})
app.use(express.json());

app.post('/', (req, res) => {
    const { name, age, gender } = req.body;
    if (!name || !age) {
        res.send("name require")
    }
    const user = new userdata({
        name,
        age,
        gender
    })
    user.save()
    res.send(user)
})

app.get('/', (req, res) => {


    // userdata.find({}).then((result)=>{
    // res.send(result)
    // })

    // userdata.aggregate([
    //     // { $sort: { name: 1 } },
    //     {
    //         $group: {
    //             name: { $addToSet: "$name" },
    //             _id: null
    //         }
    //     }
    // ])
    //     .then((result) => {
    //         res.send(result)
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log(err)
    //     })


    userdata.aggregate([
        // { $group: { _id: { age: "$age", gender: "$gender" },name: { $addToSet: "$name" } }  },

        {
            $group:
            {
                _id: "$name",
                age: { $first: "$age" },
                gender: { $first: "$gender" }
            }
        },
        {
            $project: {
                "name": "$_id",
                age: "$age",
                gender: "$gender",
                "_id": 0
            }
        }, { $sort: { age: 1 } }
    ])
        .then((result) => {
            res.send(result)
            // console.log(result);
        }).catch((err) => {
            console.log(err)
        })
})


//Get All Data
// userdata.aggregate([
//     { $group: { _id: { name: "$name", age: "$age", gender: "$gender" } } },
// ])
// .then((result) => {
//     // res.send(result)
//     console.log(result);
// }).catch((err) => {
//     console.log(err)
// })


//name with all age and gender return
// userdata.aggregate([
//     { "$group": { "_id": "$name", "age": { "$addToSet": "$age" }, "gender": { "$addToSet": "$gender" } } },
//     { "$project": { "name": "$_id", "AgeAndGender": { "$setUnion": ["$age", "$gender"] }, "_id": 0 } },
// ])
//     .then((result) => {
//         // res.send(result)
//         console.log(result);
//     }).catch((err) => {
//         console.log(err)
//     })


app.listen(port, console.log("server start"))