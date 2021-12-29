const express = require('express');
var request = require('request');
const app = express();
const port = 3000;
const api = "https://api.coinpaprika.com/v1/coins/btc-bitcoin";




app.get('/', (req, res, next) => {
  request({
    uri: api,
  }).pipe(res);
});



// https.get(api, (resp) => {
//     let data = '';
//     resp.on('data', (result) => {
//         data += result;
//     });
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });


app.listen(port, () => {
  console.log("server start");
});