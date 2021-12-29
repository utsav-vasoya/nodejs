const express = require('express');
var request = require('request');
const app = express();
const port = 3000;
const api = "https://api.coinpaprika.com/v1/coins/btc-bitcoin";

//GET ALL DATA FROM EXTERNAL API
app.get('/', (req, res, next) => {
  request(api, (err, response, body) => {
    if (response) {
      console.log(JSON.parse(body));
      res.json(JSON.parse(body));
    } else {
      res.json(error);
    }
  });
});

//GET ONLY TAGS FIELD FROM EXTERNAL API
app.get('/tags', (req, res, next) => {
  request(api, (err, response, body) => {
    if (response) {
      var data = JSON.parse(body);
      console.log(data.tags);
      res.json(data.tags);
    } else {
      res.json(error);
    }
  });
});

//FILTER ON TAGS FIELD--RETURN ONLY COIN_COUNTER>10
app.get('/tags/filter/coin_counter', (req, res, next) => {
  request(api, (err, response, body) => {
    if (response) {
      var data = JSON.parse(body);
      var storetags = data.tags;
      var result = storetags.filter((filter_data) => {
        return filter_data.coin_counter > 10;
      })
      res.json(result);
      console.log(result);
    } else {
      res.json(error);
    }
  });
});



// app.get('/', (req, res, next) => {
//   request({
//     uri: api,
//   }).pipe(res);
// });

//OTHER METHOD TO FIND DATA FROM EXTERNAL API
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