const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require('../Models/Userdata');
const ejs = require('ejs');
router.post('/', async (req, res) => {
    try {
        const { id, name, age, gender } = req.body;
        if (!id || !name || !age || !gender) {
            return res.status(401).send("Please enter all field");
        }
        if (await user.findOne({ id })) {
            return res.send("Id Alredy Taken");
        }
        const adduser = await new user({
            id,
            name,
            age,
            gender
        })
        await adduser.save();
        res.status(200).send(adduser);
        console.log(adduser);

    } catch (err) {
        res.send(err)
    }

})

router.get('/', (req, res) => {
    res.render('Pages/home.ejs')
    // res.send(data)
})

router.post('/users', (req, res) => {
    user.find({}, (err, data) => {
        // res.render('Pages/home.ejs', { results: data })
        res.send(data)
    })
})
module.exports = router;