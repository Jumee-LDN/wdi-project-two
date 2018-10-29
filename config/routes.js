const router = require('express').Router();
const cityController = require('../controllers/cityController');

// router.get('/', (req, res) => {
//   console.log('Home page loaded');
//   res.render('pages/home');
// });

//ADD NEW CITY
//Show user a form
router.get('/', cityController.cityNewRoute);


module.exports = router;
