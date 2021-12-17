const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")
    //FindOne data from collection
    // database.collection("mycollection").findOne({}, (err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })

    //Find All data from collection

    // database.collection("mycollection").find({}).toArray((err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })

    //Find some data 
    // database.collection("mycollection").find({}, { projection: {  name: 1 } }).toArray((err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })

    //Filter the data
    database.collection("mycollection").find({ Age: 20 }).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })

})