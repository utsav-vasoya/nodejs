const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// var validator = require("email-validator");
let users = []
router.get('/', (req, res) => {
    res.send(users)
})

console.log(process.env.MAIL_ID);
console.log(process.env.PASSWORD)

router.post('/sendmail', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email) {
            return res.status(400).send("Enter name and Email");
        }
        const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegexp.test(req.body.email)) return res.send("enter valid email")

        // if (!validator.validate(req.body.email)) return res.send("enter valid email")

        var user = {
            name: req.body.name,
            email: req.body.email
        }
        await users.push(user);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.PASSWORD,
            }
        });
        const sendmail = {
            from: "Utsavvasoya.vision@gmail.com",
            to: user.email,
            subject: "Dynamic template",
            html: `<h1>Hello ${user.name}</h1>`
        }
        const result = await transporter.sendMail(sendmail);
        res.send("Email has been sent to " + req.body.name)
        console.log(result)
      
    } catch (e) { console.error(e); }

})
module.exports = router;