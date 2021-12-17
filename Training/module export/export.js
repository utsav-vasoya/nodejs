const http = require('http');
const date = require('./test1')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello World \r\n")
    res.end("Current Time is: " + date.mydate);
})
server.listen(3000);