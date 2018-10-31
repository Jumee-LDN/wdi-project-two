const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: { type: String },
  city: { type: String, enum: ['London', 'Manchester', 'Liverpool', 'New York', 'Buenos Aires', 'Seoul', 'Beijing', 'Cairo', 'Lisbon', 'Rome', 'Barcelona', 'Valencia', 'Madrid', 'Cape Town', 'Taipei'] },
  images: [{ type: String }],
  address: [{ type: String }],
  reviews: [{
    user: { type: String },
    rating: { type: Number, min: 1, max: 10 },
    comments: { type: String }
  }]
});


const restaurantModel = mongoose.model('Resturant', restaurantSchema);

module.exports = restaurantModel;
