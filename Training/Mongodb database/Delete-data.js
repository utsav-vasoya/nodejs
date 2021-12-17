const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")

    //DeleteOne

    database.collection("mycollection").deleteOne({ name: "utsav" }, (err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })

    //Delete many

    // database.collection("mycollection").deleteMany({ name: /^a/ }, (err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })

    //Drop Collection
    // database.dropCollection("collection1", (err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // })


})