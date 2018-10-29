const router = require('express').Router();
const rController = require('../controllers/rController');

//HOME PAGE
// INDEX ROUTE
router.get('/', rController.restaurantNewRoute);

// CREATE ROUTE
router.post('/cities', rController.restaurantCreateRoute);

// SHOW ROUTE
router.get('/restaurants/:city', rController.restaurantShowRoute);

module.exports = router;
