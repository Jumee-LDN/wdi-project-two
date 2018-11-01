const Restaurant = require('../models/restaurant');


// Take input from the form, and redirect url with city name(value from html form)
function restaurantFilterByCity(req, res) {
  res.redirect(`/restaurants/city/${req.body.city}`);
}
// show user a page with all cities
// matching city name
function restaurantIndex(req, res) {
  Restaurant
    .find({ city: req.params.city })
    .then(restaurants => {
      const city = req.params.city;
      res.render('restaurants/index', { restaurants, city });
    });
}

function restaurantShow(req, res) {
  Restaurant
    .findById(req.params.id)
    .populate('reviews.user')
    .then(restaurant => {
      const city = restaurant.city;
      res.render('restaurants/show', { restaurant, city });
    });
}

function restaurantEdit(req, res) {
  Restaurant
    .findById(req.params.id)
    .then(restaurant => {
      res.render('restaurants/edit', restaurant);
    });
}

function restaurantUpdate(req, res) {
  Restaurant
    .findByIdAndUpdate(req.params.id, req.body)
    .then(restaurant => {
      restaurant.reviews.splice(0, 1, req.body);
      restaurant.save();
      res.redirect(`/restaurants/${restaurant._id}`);
    });
}

function restaurantDelete(req, res) {
  Restaurant
    .findByIdAndDelete(req.params.id)
    .then(res.redirect(`/restaurants/city/${req.params.city}`));
}

function restaurantNew(req, res) {
  res.render('restaurants/new');
}

function restaurantCreate(req, res) {
  Restaurant
    .create(req.body)
    .then(restaurant => {
      restaurant.reviews.push(req.body);
      restaurant.save();
      res.redirect(`/restaurants/${restaurant._id}`);
    });
}


module.exports = {
  filterByCity: restaurantFilterByCity,
  index: restaurantIndex,
  show: restaurantShow,
  edit: restaurantEdit,
  update: restaurantUpdate,
  delete: restaurantDelete,
  new: restaurantNew,
  create: restaurantCreate
};
