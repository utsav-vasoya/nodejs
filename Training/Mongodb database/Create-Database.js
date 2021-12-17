const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/firstdatabase'

mongodb.connect(url, (err, db) => {
    if (err) throw err;
    console.log('connected.....')
    db.close();

})