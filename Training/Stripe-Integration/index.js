const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

var Publishable_Key = 'pk_test_51KCGKeSHA3evzryHYpBBbQ3zmScbfgwXPbgNX1eZMCzG7K8rTr8z0VP5VDVMfQaNw1bzPXczLX4LgUyy3sykvKbs00NNsZrVIw'
var Secret_Key = 'sk_test_51KCGKeSHA3evzryH3R6yRrg7YYlZgk8jrTUysWtb6YQETYQkpzZJzXmk6Os8G7LDAcDqNyhZJnUY8phPp29HVVte00rijlPyZK'

const stripe = require('stripe')('sk_test_51KCGKeSHA3evzryH3R6yRrg7YYlZgk8jrTUysWtb6YQETYQkpzZJzXmk6Os8G7LDAcDqNyhZJnUY8phPp29HVVte00rijlPyZK')

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())


// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('partials/home.ejs', {
        key: Publishable_Key,
        amount: req.body.amount * 100,
        description: req.body.description
    })
})

app.post('/payment', function (req, res) {
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken,
    })
        .then((customer) => {
            return stripe.charges.create({
                amount: req.body.amount * 100,
                description: req.body.description,
                currency: 'INR',
                customer: customer.id
            });
        })
        .then((charge) => {
            res.send("Success")
            console.log(charge)
        })
        .catch((err) => {
            res.send("Invalid Card number")
        });
})

app.listen(port, function (error) {
    if (error) throw error
    console.log("Server created Successfully")
})
