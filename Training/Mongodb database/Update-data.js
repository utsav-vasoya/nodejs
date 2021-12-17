const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var database = db.db("mydatabase")
    database.collection("mycollection").updateOne({ _id: "61adfb89a2aeecebd81bbbf8" }, { $set: { name: "Yasin" } }, (err, res) => {
        if (err) throw err;
        console.log('Updated....');
        db.close();
    })

    //Update many

    // database.collection("mycollection").updateMany({ name: "utsav" }, { $set: { Age: 35 } }, (err, res) => {
    //     if (err) throw err;
    //     console.log('Updated....');
    //     db.close();
    // })
})