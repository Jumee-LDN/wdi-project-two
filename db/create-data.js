const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Resturant = require('../models/restaurant');

const restaurantData = [
  {
    name: 'Hozi',
    city: 'London',
    rating: 9
  },
  {
    name: 'Hangang',
    city: 'London',
    rating: 4
  },
  {
    name: 'Kimchi',
    city: 'London',
    rating: 6
  },
  {
    name: 'NY K-Place',
    city: 'New York',
    rating: 8
  }
];

Resturant.collection.drop();

Resturant.create(restaurantData)
  .then(resturants => {
    console.log(`Created ${resturants.length}`);
    mongoose.connection.close();
  });
