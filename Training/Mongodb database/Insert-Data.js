const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'
mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")
    // var obj = { name: "Utsav", Age: 20 }
    // database.collection('mycollection').insertOne(obj, (err, res) => {
    //     if (err) throw err;
    //     console.log('Data Inserted');
    //     db.close();
    // })


    //Insert many
    var obj = [{ name: "utsav" }, { name: "ravi" }, { name: "ankit" }, { name: "raj" }];
    database.collection('mycollection').insertMany(obj, (err, res) => {
        if (err) throw err;
        console.log(res.insertedCount + ' Data Inserted' );
        db.close();
    })
})