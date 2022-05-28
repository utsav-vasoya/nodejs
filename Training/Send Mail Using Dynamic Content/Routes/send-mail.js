const express = require('express');
const router = express.Router();
const app = express();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_ID,
        pass: process.env.PASSWORD,
    }
});

router.post('/sendmail', function (req, res) {

    app.render('mail.ejs', { name: req.body.name }, function (err, html) {
        if (err) {
            console.log('error rendering email template:', err)
            return
        } else {
            var mailOptions = {
                from: process.env.MAIL_ID,
                to: process.env.MAIL_ID,
                subject: 'Verify Your Email',
                generateTextFromHtml: true,
                html: html
            };
            transporter.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    res.send('Mail Error! Try again')
                } else {
                    console.log(response);

                    res.send("Mail succesfully sent!")
                }
            });
        }
    });
});

module.exports = router;