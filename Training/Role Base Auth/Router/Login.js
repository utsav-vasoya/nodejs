const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userdata = require('../Models/Userdata')
const jwt = require("jsonwebtoken");
const bookschema = require('../Models/BookSchema');
const auth = require('../Middleware/Authenticate')
const bcrypt = require('bcrypt')
const passsport = require('passport');
router.post("/register", async (req, res) => {
    try {
        const { username, password, role } = req.body;
        if (!username || !password) {
            return res.send("Please enter name and password")
        }
        else {
            const finduser = await userdata.findOne({ username })
            if (finduser) {
                return res.status(400).json({ message: "user alredy taken" });
            }
            const newuser = await new userdata({
                username,
                password,
                role

            })
            const salt = await bcrypt.genSalt(10);
            newuser.password = await bcrypt.hash(newuser.password, salt);
            await newuser.save()
            res.status(201).json({ newuser });
        }
    } catch (err) {
        res.send(err)
        console.log(err)
    }

})


router.post("/login", async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = await userdata.findOne({ username });
        if (!user) {
            return res.json({ status: 'error', error: 'User Not Found' })
        }
        if (user.role !== role) {
            return res.status(400).send("Your role is false!")
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { _id: user._id },
                process.env.secretKey,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            res.status(200).json({ user, token: `Bearer ${token}` });
        }
        res.status(400).send("Invalid login info");
    } catch (err) {
        res.send(err)
        console.log(err);
    }
});


router.get('/book', async (req, res) => {
    try {
        const findbook = await bookschema.find();
        res.status(200).send(findbook);
    } catch (err) { res.status(500).send(err) }
})

router.post('/book', auth.userAuth, async (req, res) => {
    try {
        const createbook = new bookschema(req.body);
        await createbook.save();
        res.status(200).send(createbook);
    } catch (err) { res.status(500).send(err) }
})

router.put('/book/:id', async (req, res) => {
    try {
        const findbook = await bookschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!findbook) return res.status(404).send("BookId Invalid!!!")
        await findbook.save();
        res.status(200).send(findbook);
    } catch (err) { console.log(err) }
})

router.delete('/book/:id', async (req, res) => {
    try {
        const book = await bookschema.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send("Book Not Found!!!!")
        res.send("Book Deleted......")
    } catch (err) {
        console.log(err);
    }
})

module.exports = router