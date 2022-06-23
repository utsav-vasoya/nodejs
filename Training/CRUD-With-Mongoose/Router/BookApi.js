require('dotenv').config()
const express = require('express')
const router = express.Router();
const bookschema = require('../Models/BookSchema');
// const adminschema = require('../Models/AdminSchema');
// const userschema = require('../Models/UserSchema');
const jwt = require('jsonwebtoken')
// const auth = require('../Auth-Middleware/Middleware')

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (req.body.username === "Admin" && req.body.password === "Admin@123") {
            const findadmin = await adminschema.findOne({ username })
            if (findadmin) {
                return res.status(400).json({ message: "Alredy Login" });
            }
            const newadmin = await new adminschema({
                username,
                password
            })
            const token = jwt.sign(
                { username },
                process.env.secretKey,
                {
                    expiresIn: "1d",
                }
            )
            newadmin.token = token
            await newadmin.save()
            res.status(201).json({ msg: "Admin Login successful", token });
        }
        else {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.send("Please enter username and password")
            }
            else {
                const finduser = await userschema.findOne({ username })
                if (finduser) {
                    return res.status(400).json({ message: "username alredy taken" });
                }
                const newuser = await new userschema({
                    username,
                    password,
                })
                await newuser.save()
                res.status(201).json({ newuser });
            }
        }
    }
    catch (err) { console.log(err) }
})


router.get('/book', async (req, res) => {
    try {
        const findbook = await bookschema.find();
        res.status(200).send(findbook);
    } catch (err) { res.status(500).send(err) }
})

router.post('/book', auth, async (req, res) => {
    try {
        const createbook = new bookschema(req.body);
        await createbook.save();
        res.status(200).send(createbook);
    } catch (err) { res.status(500).send(err) }
})

router.put('/book/:id', auth, async (req, res) => {
    try {
        const findbook = await bookschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!findbook) return res.status(404).send("BookId Invalid!!!")
        await findbook.save();
        res.status(200).send(findbook);
    } catch (err) { console.log(err) }

    // bookschema.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(result => {
    //     if (!result) {
    //         return res.send("BookId Invalid!!!")
    //     }
    //     res.status(200).send(result);
    // })
})

router.delete('/book/:id', auth, async (req, res) => {
    try {
        const book = await bookschema.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send("Book Not Found!!!!")
        res.send("Book Deleted......")
    } catch (err) {
        console.log(err);
    }
})

router.delete('/book', auth, async (req, res) => {
    try {
        const book = await bookschema.deleteMany();
        if (!book) return res.status(404).send("Book Not Found!!!!")
        res.send("Book Deleted......")
    } catch (err) {
        console.log(err);
    }
})


//Delete User
router.delete('/user/:id', async (req, res) => {
    try {
        const user = await userschema.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send("User Not Found!!!!")
        res.send("User Deleted......")
    } catch (err) {
        console.log(err);
    }
})


//Delete All User From Database
router.delete('/user', auth, async (req, res) => {
    try {
        const user = await userschema.deleteMany();
        if (!user) return res.status(404).send("User Not Found!!!!")
        res.send("User Deleted......")
    } catch (err) {
        console.log(err);
    }
})
module.exports = router;