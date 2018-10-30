const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');
const authController = require('../controllers/authController');


// SET UP USER REGISTERATION
//When user goes to the registration page, load a form
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);


// Homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

//NEW RESTAURANT
//GET /restaurants/new restaurantController.new
router.get('/restaurants/new', restaurantController.new);
//POST /restaurants restaurantController.create
router.post('/restaurants', restaurantController.create);

// route to render the index page based on input form on homepage
router.post('/cities', restaurantController.filterByCity);

router.get('/restaurants/city/:city', restaurantController.index);

router.get('/restaurants/:id', restaurantController.show);

//EDIT RESTAURANT
router.get('/restaurants/:id/edit', restaurantController.edit);

//UPDATE RESTAURANT
router.put('/restaurants/:id', restaurantController.update);

//DELETE RESTAURANT

//DELETE /restaurants/:id restaurantController.delete
router.delete('/restaurants/:city/:id', restaurantController.delete);



module.exports = router;
