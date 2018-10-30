const User = require('../models/user');

// USER REGISTERATION
function registerFormRoute(req, res){
  //render the page with auth/register.ejs file
  res.render('auth/register');
}

function registerRoute(req, res){
  //Create a new user
  // req.body contains the data from the registration form
  User.create(req.body)
    .then(result => {
      console.log('User created', result);
      //Redirect to Home page
      res.redirect('/');
    });
}

// USER LOG IN
function loginFormRoute(req, res){
  res.render('auth/login');
}

function loginRoute(req, res){
  // req.body has the data from the login form
  console.log('User is logging in', req.body);
  User.findOne({ email: req.body.email })
    .then(result => {
      if (!result) {
        // If there is no user
        res.redirect('/login');
      } else {
        // We've found a user in the database!
        // Write the user's ID into their locker (session).
        // (req.session is the locker)
        req.session.userId = result._id;
        res.redirect('/');
      }
    });
  // Validate the password???
  // Write their id into req.session
  // Otherwise redirect to login form
}

// USER LOG OUT
function logoutRoute(req, res) {
  console.log('The user has logged out!');
  // Clear the data in the current session
  // SEssion is the locker
  req.session.regenerate(function() {
    res.redirect('/');
  });
}


module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute,
  logoutRoute: logoutRoute
};
