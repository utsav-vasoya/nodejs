const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require('../Models/UserModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.send("Please enter name,email and password")
        }
        else {
            const finduser = await user.findOne({ email })
            if (finduser) {
                return res.status(400).json({ message: "Email alredy taken" });
            }
            const newuser = await new user({
                name,
                email,
                password,

            })
            const token = jwt.sign(
                { email: newuser.email },
                process.env.secretKey,
                {
                    expiresIn: "48h",
                }
            )
            newuser.token = token;
            const salt = await bcrypt.genSalt(10);
            newuser.password = await bcrypt.hash(newuser.password, salt);

            await newuser.save()
            res.status(201).json({ newuser });
        }
    } catch (err) {
        res.send(err)
    }

})


module.exports = router