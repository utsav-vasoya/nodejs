const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")

    //Sorting data
    database.collection("mycollection").find({}).sort().toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        db.close();
    })

})