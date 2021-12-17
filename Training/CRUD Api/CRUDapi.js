require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT ;
app.use(express.json());
const books = [
    { name: 'NodeJs', id: 1 },
    { name: 'ExpressJS', id: 2 },
    { name: 'Java', id: 3 }
]

//GET user data
app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(u => u.id === parseInt(req.params.id));

    if (!book) res.status(404).send('Ooops...book not found');
    res.send(book);
});

//CREATE new user
app.post('/api/books', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).send("Invalid Book name")
    }
    const book = {
        id: books.length + 1,
        name: req.body.name
    };
    books.push(book);
    res.send(book);
});

//UPDATE records
app.put('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book Not Found!');

    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).send("Invalid..")
    }

    book.name = req.body.name;
    res.send(book);
});

//DELETE Book
app.delete('/api/books/:id', (req, res) => {

    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book Not Found!!');

    books.splice(books.indexOf(book), 1);
    res.send("Book Deleted....");
});
console.log("My Secret Key is",process.env.SECRET_KEY)

app.listen(port, console.log(`Listening on port ${port}..`));



