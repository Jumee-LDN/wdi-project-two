const Restaurant = require('../models/restaurant');


//HOME PAGE
// Show user a form
function restaurantNewRoute(req, res) {
  res.render('pages/home');
}
// Take input from the form, and redirect url with city name(value from html form)
function restaurantCreateRoute(req, res) {
  console.log('user input is-->req.body.city: ', req.body.city);
  res.redirect(`/restaurants/${req.body.city}`);
}
// show user a page with all cities
// matching city name 
function restaurantShowRoute(req, res) {
  console.log('this is the city', req.params.city);
  Restaurant
    .find({ city: req.params.city })
    .then(restaurants => res.render('restaurants/index', { restaurants }));
}


module.exports = {
  restaurantNewRoute: restaurantNewRoute,
  restaurantCreateRoute: restaurantCreateRoute,
  restaurantShowRoute: restaurantShowRoute
};
