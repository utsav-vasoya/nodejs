const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

//Reading a file

// fs.readFile('read.txt', (err, res) => {
//     if (err) return console.log(err)
//     console.log(res.toString())
// })


//Open file

fs.open('read.txt', 'r+', (err, data) => {
    if (err) return console.log(err)
    console.log(data)
})


//Read entire file
var buf = new Buffer(5000) //In that store our data and size is 5000
fs.read(4, buf, 0, buf.length, 0, (err, res) => {
    if (err) return console.log(err);
    console.log(res);
    if (res > 0) {
        console.log(buf.slice(0, res).toString());
    }
})





//Writing a file 

// fs.writeFile('reads.txt', "Hello \nHow are you?", (err) => {
//     if (err)
//         console.error(err);
//     console.log("Writing file Successful ");
//     console.log("Let's read new file");
//     fs.readFile('read.txt', (err, data) => {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(data.toString());
//     });
// })

//Append File
// fs.appendFile('read.txt', "\nWhat's Your Good Name  ", (err) => {
//     if (err) return console.log(err)
//     console.log("File append successful")
// })

//Close the file
// fs.close(4, (err) => {
//     if (err) return console.log(err)
//     console.log("File closed successfully")
// })


//delete file
// fs.unlink('reads.txt', (err) => {
//     if (err) throw err;
//     console.log("File Deleted")
// })



app.listen(port, console.log(`Listening on port ${port}..`));