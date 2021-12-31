const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.TWILIO_ACOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.get('/login', (req, res) => {
    if (req.query.phonenumber) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verifications
            .create({
                to: `+${req.query.phonenumber}`,
                channel: req.query.channel
            })
            .then(data => {
                res.status(200).json({
                    message: "Verification is sent!!",
                    phonenumber: req.query.phonenumber,
                    data
                })
            })
    } else {
        res.status(400).send({
            message: "Wrong phone number :("
        })
    }
})

router.get('/verify', (req, res) => {
    if (req.query.phonenumber && (req.query.code).length === 4) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "User is Verified!!",
                        data
                    })
                }
            })
    } else {
        res.status(400).send({
            message: "Wrong phone number or code :(",
            phonenumber: req.query.phonenumber
        })
    }
});

module.exports = router