const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  name: String
});


const cityModel = mongoose.model('City', citySchema);

module.exports = cityModel;
