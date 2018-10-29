const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const City = require('../models/city');

const cityData = [
  {
    name: 'London'
  },
  {
    name: 'New York'
  }
];

City.collection.drop();

City.create(cityData)
  .then(cities => {
    console.log(`Created ${cities.length}`);
    mongoose.connection.close();
  });
