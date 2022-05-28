require("dotenv").config();
const express = require('express');
const port = 3000;
const nodemailer = require("nodemailer");
const app = express();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: "utsavvasoya89@gmail.com",
    subject: "Node.js Email with Secure OAuth",
    generateTextFromHTML: true,
    html: "<b>test</b>"
};

transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
    transporter.close();
});

app.listen(port, console.log(`Server Start====>${port}`));