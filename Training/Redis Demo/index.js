const express = require('express');
const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

client.on('connect', function () {
  console.log('Redis Connected!');
});
app.listen(PORT, async () => {
  console.log(`Server started at port: ${PORT}`);
  await client.connect()
});

app.get('/photos', async (req, res) => {
  try {
    const albumId = req.query.albumId;
    var getData = await getPhotoData(`photos?albumId=${albumId}`, albumId);
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
})

app.get('/photos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    var getData = await getPhotoData(`photos:${id}`, id);
    res.status(200).send(getData);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
})

async function getPhotoData(Key, id) {
  return new Promise(async function (resolve, reject) {
    try {
      var getValue = await client.get(Key);
      if (getValue != null) {
        console.log('Data retrieved from Redis');
        return resolve(JSON.parse(getValue));
      } else {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos', { params: { id } })
        client.setEx(Key, 3600, JSON.stringify(data));
        console.log('Data retrieved from the API');
        resolve(data);
      }
    } catch (e) {
      console.log(e)
      resolve(0);
    }
  });
}

