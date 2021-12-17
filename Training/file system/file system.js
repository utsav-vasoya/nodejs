const http = require('http');
const date = require('./test1')
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello World \r\n")
    res.end("Current Time is: " + date.mydate);


    //read file
    // fs.readFile('file.html', (err, result) => {
    //     res.end(result)
    // })

    //Create file
    // fs.writeFile('create-file.html', 'Vision Infotech ', (err) => {
    //     if (err) throw err;
    // })
    // fs.appendFile('create-file.html', 'Hello How are You', (err) => {
    //     if (err) throw err;
    // })

    //delete file
    // fs.unlink('create-file.html', (err) => {
    //     if (err) throw err;
    // })

    //rename file
    // fs.rename('file.html', 'rename-file.html', (err) => {
    //     if (err) throw err;
    // })
})
server.listen(3000)