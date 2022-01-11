const express = require('express');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 3000;
const swaggerDocument = require('./swagger.json');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/swagger-demo');
const ejs = require('ejs');

var UserSchema = new mongoose.Schema({
    email: {
        type: String, required: true,
        trim: true, unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    firstName: { type: String },
    lastName: { type: String }
});

var User = mongoose.model('User', UserSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
    res.render('home.ejs');
})
// app.get('/users', (req, res) => {
//     User.find((err, user) => {
//         if (err) {
//             throw (err);
//         } else {
//             res.send(user);
//         }
//     });
// });
app.post('/users', (req, res) => {
    var user = new User(req.body);
    user.save((err) => {
        if (err) {
            throw (err);
        } else {
            res.json(user);
        }
    });
});
app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
        if (err) {
            throw (err);
        } else {
            res.send(user);
        }
    });
});
app.delete('/users/:id', (req, res) => {
    User.deleteOne({ id: req.params._id }, (err, user) => {
        if (err) {
            throw (err);
        } else {
            res.send(user);
        }
    });
});
app.get('/users/:id', (req, res) => {
    User.findOne({ id: req.params._id }, (err, user) => {
        if (err) {
            throw (err);
        } else {
            res.send(user);

        }
    });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, console.log("Server Starting "));