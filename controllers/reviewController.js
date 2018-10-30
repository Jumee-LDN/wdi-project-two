const Restaurant = require('../models/restaurant');


//RESTAURANT REVIEW PAGE
// Show form to add new review
function newReviewRoute(req, res) {
  res.render('restaurants/new');
}

function createReviewRoute(req, res) {
  console.log('user typed restaurant info, req.body: ', req.body);

  Restaurant.create(req.body)
    .then(restaurant => {
      console.log('restaurant is: ', restaurant);
      res.redirect(`/${req.body.city}`);
    });
}

// Show one restaurant review
function showReviewRoute(req, res){
  Restaurant
    .findOne(req.params)
    .then(restaurant => {
      console.log('req.params is: ', req.params);

      console.log('restaurant is: ', restaurant);

      res.render('restaurants/show', restaurant);
    });
}

function deleteReviewRoute(req, res){
  Restaurant
    .findOne(req.params)
    .then(restaurant => {
      console.log(restaurant);
      // restaurant.id(req.params._id).remove();
      // restaurant.save()
      //   .then(() => {
      //     res.redirect(`/${req.body.city}`);
      //   });
      res.send('trying to delete');
    });
}


module.exports = {
  newReviewRoute: newReviewRoute,
  createReviewRoute: createReviewRoute,
  showReviewRoute: showReviewRoute,
  deleteReviewRoute: deleteReviewRoute
};
