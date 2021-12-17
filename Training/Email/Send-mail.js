const mailer = require('nodemailer');
const express = require('express');
const app = express();
const port = 3000;



const transport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: "Utsavvasoya.vision@gmail.com",
        pass: "utsav@123"
    }
});

const mailOption = {
    from: "Utsavvasoya.vision@gmail.com",
    to: "Utsavvasoya.vision@gmail.com",
    subject: "Send mail",
    text: "hello"
}

transport.sendMail(mailOption, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Email sent")
    }
})
app.listen(port, console.log("Server start"))
