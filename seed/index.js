const mongoose = require('mongoose');
const _ = require('underscore');

// connect to mongodb
mongoose.connect('mongodb://localhost/airbnbMorePlaces', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('We are connected!');
});

// define more places to stay schema
const morePlacesSchema = new mongoose.Schema({
  morePlaces: [Number],
  propertyId: Number
});

// compile schema into model
const MorePlaces = mongoose.model('MorePlaces', morePlacesSchema);

const seedMorePlaces = async function() {
  await MorePlaces.deleteMany({});

  const range = _.range(1, 101);
  _.each(range, async (element, index, list) => {
    const container = [];
    while (container.length < 12) {
      container.push(Math.floor(Math.random() * (101 - 1) + 1));
    }

    const newMorePlaces = await new MorePlaces({
      morePlaces: container,
      propertyId: element
    });

    await newMorePlaces.save(function (err) {
      if (err) {return console.error(err); }
      else {
        console.log('Added new morePlaces record with id: ', element);
      }
    })

  })
}

seedMorePlaces();
