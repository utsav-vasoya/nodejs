const router = require("express").Router();
const bookschema = require('../Models/BookSchema');
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register-user", async (req, res) => {
    // await userRegister(req.body, "user", res);
    try {
        const { username, password } = req.body;
        const finduser = await User.findOne({ username })
        if (finduser) {
            return res.status(400).json({ message: "User Alredy Registerd!" });
        }
        const newUser = new User({
            username,
            password,
            role: "user"
        });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        await newUser.save();
        return res.status(201).json({
            newUser,
            message: "You are successfully registred. Please nor login.",
            success: true
        });
    } catch (err) {
        // console.log(err)
        return res.status(500).json({
            message: "Unable to create your account.",
            success: false
        });
    }
});

router.post("/register-admin", async (req, res) => {
    // await userRegister(req, res);
    try {
        const { username, password } = req.body;
        const finduser = await User.findOne({ username })
        if (finduser) {
            return res.status(400).json({ message: "user alredy taken" });
        }
        const newUser = new User({
            username,
            password,
            role: "admin"
        });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        await newUser.save();
        return res.status(201).json({
            message: "Now you are successfully registred. Please nor login.",
            success: true
        });
    } catch (err) {
        // console.log(err)
        return res.status(500).json({
            message: "Unable to create your account.",
            success: false
        });
    }
});

router.post("/login-user", async (req, res) => {
    // await userLogin(req.body, "user", res);
    let { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({
            message: "Username is not found. Invalid login credentials.",
            success: false
        });
    }
    if (user.role !== "user") {
        return res.status(403).json({
            message: "Please make sure you are logging in from the right portal.",
            success: false
        });
    }
    let ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
        let token = jwt.sign(
            {
                user_id: user._id,
                role: user.role,
                username: user.username,
            },
            process.env.SECRET,
            { expiresIn: "7 days" }
        );

        let result = {
            username: user.username,
            role: user.role,
            token: `Bearer ${token}`,
        };

        return res.status(200).json({
            result,
            message: "You are now logged in.",
            success: true
        });
    } else {
        return res.status(403).json({
            message: "Incorrect password.",
            success: false
        });
    }
});

router.post("/login-admin", async (req, res) => {
    // await userLogin(req, res);
    let { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({
            message: "Username is not found. Invalid login credentials.",
            success: false
        });
    }
    if (user.role !== "admin") {
        return res.status(403).json({
            message: "Please make sure you are logging in from the right portal.",
            success: false
        });
    }
    let ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
        let token = jwt.sign(
            {
                user_id: user._id,
                role: user.role,
                username: user.username,
            },
            process.env.SECRET,
            { expiresIn: "7 days" }
        );

        let result = {
            username: user.username,
            role: user.role,
            token: `Bearer ${token}`,
            expiresIn: 168
        };

        return res.status(200).json({
            result,
            message: "You are now logged in.",
            success: true
        });
    } else {
        return res.status(403).json({
            message: "Incorrect password.",
            success: false
        });
    }
});

module.exports = router;