const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")
    database.createCollection("mycollection", (err, res) => {
        if (err) throw err;
        console.log('collection created');
        db.close();
    })

})