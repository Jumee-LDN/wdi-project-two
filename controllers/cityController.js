const City = require('../models/city');

function cityNewRoute(req, res){
  res.render('cities/new');
}

module.exports = {
  cityNewRoute: cityNewRoute
};
