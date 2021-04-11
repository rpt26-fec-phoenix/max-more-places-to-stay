const db = require('../database/index.js');
const path = require('path');
const express = require('express');
const port = 3008;

const app = express();

app.use('/:propertyId', express.static(path.join(__dirname, '../public')));

app.get('/more-places-to-stay/:propertyId', (req, res) => {
  db.getMorePlaces(req.params.propertyId)
    .then(result => {
      res.send(result.morePlaces);
    })
    .catch(err => {
      res.send(err);
    });
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}/1/`);
});
