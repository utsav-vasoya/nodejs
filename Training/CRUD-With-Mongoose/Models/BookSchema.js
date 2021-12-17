const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Book", BookSchema, 'book')
