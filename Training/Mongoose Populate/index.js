const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/populate',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, () => console.log("Database Connected"));
app.use(express.json());
app.use('/', require('./src/routes/user'))
app.listen(port, () => {
    console.log("Server Start");
});