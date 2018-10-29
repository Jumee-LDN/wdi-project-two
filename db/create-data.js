const env = require('../config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const Resturant = require('../models/restaurant');

const restaurantData = [
  {
    name: 'Hozi',
    city: 'London',
    comments: [{
      rating: 8,
      user: 'Jumee',
      content: 'Great restaurant!'
    }]
  },
  {
    name: 'Hangang',
    city: 'London',
    comments: [{
      rating: 3,
      user: 'Sean',
      content: 'So so...'
    }]
  },
  {
    name: 'Kimchi',
    city: 'London',
    comments: [{
      rating: 6,
      user: 'Kate',
      content: 'Could be better.'
    }]
  },
  {
    name: 'NY K-Place',
    city: 'New York',
    comments: [{
      rating: 8,
      user: 'James',
      content: 'Awesome place.'
    }]
  }
];

Resturant.collection.drop();

Resturant.create(restaurantData)
  .then(resturants => {
    console.log(`Created ${resturants.length}`);
    mongoose.connection.close();
  });
