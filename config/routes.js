const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');


// SET UP USER REGISTERATION
//When user goes to the registration page, load a form
router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);


// SET UP USER LOG IN and OUT
router.get('/login', authController.loginFormRoute);

router.post('/login', authController.loginRoute);
router.get('/logout', authController.logoutRoute);

// Homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

//NEW RESTAURANT
router.get('/restaurants/new', restaurantController.new);
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
