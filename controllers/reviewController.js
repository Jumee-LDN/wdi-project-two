const Restaurant = require('../models/restaurant');


function createRoute(req, res){
  Restaurant
    .findById(req.params.id)
    .then(restaurant => {
      console.log('Creating a comment', restaurant, req.body);
      const city = restaurant.city;
      restaurant.rating.push(req.body);
      restaurant.save().then(() => res.redirect(`/restaurants/city/${req.params.city}`));
    });
}

module.exports = {
  createRoute: createRoute
};
