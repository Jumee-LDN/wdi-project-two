const User = require('../models/user');

// Middleware to respond to all requests and check auth status
function checkAuthStatus(req, res, next){
  console.log('Incoming request', req.method, req.originalUrl);
  //Check if user is logged in on the session(locker)
  if(req.session.userId){
    //The session(locker) has a userId in it.
    User.findById(req.session.userId)
      .then(user => {
        // user is an object! It represents a user from the database
        // We'd like to save it somewhere globally:
        res.locals.currentUser = user;
        res.locals.isLoggedIn = true;
        // We have finished. So invoke next:
        next();
      });
  } else {
    //No user is logged in
    // When we have finished in this function, we must invoke next
    next();
  }
}

module.exports = {
  checkAuthStatus: checkAuthStatus
};
