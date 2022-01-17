const express = require('express');
const router = express.Router();
const client = require('twilio')(process.env.TWILIO_ACOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

router.get('/login', (req, res) => {
    if (req.body.phonenumber) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verifications
            .create({
                to: `+${req.body.phonenumber}`,
                channel: req.body.channel
            })
            .then(data => {
                res.status(200).json({
                    message: "Verification is sent!!",
                    phonenumber: req.body.phonenumber,
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
    if (req.body.phonenumber && (req.body.code).length === 4) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.body.phonenumber}`,
                code: req.body.code
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
            phonenumber: req.body.phonenumber
        })
    }
});

module.exports = router