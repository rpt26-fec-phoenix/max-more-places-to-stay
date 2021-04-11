const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnbMorePlaces', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const morePlacesSchema = new mongoose.Schema({
  morePlaces: [Number],
  propertyId: Number
});

const MorePlaces = mongoose.model('MorePlaces', morePlacesSchema);

const getMorePlaces = async (propertyId) => {
  return await MorePlaces.findOne({propertyId})
};

module.exports = {
  getMorePlaces
};
