const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  name: { type: String },
  city: { type: String, enum: ['London', 'New York'] },
  comments: [{
    rating: { type: Number, min: 1, max: 10 },
    user: { type: String, required: true },
    content: { type: String }
  }]
});


const restaurantModel = mongoose.model('Resturant', restaurantSchema);

module.exports = restaurantModel;
