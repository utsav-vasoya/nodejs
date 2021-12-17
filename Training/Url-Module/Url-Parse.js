var url = require('url');
var address = 'http://localhost:3000/demo.htm?year=2021&month=december';

//Parse the address:
var que = url.parse(address, true);

//The parse method returns an object containing url properties//

console.log(query.host);
console.log(query.pathname);
console.log(query.search);

//The query property returns an object with all the querystring parameters as properties//

console.log(que.query.month);
