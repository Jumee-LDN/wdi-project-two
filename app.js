const express = require('express');
const app = express();
const env = require('./config/environment');
const router = require('./config/routes');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const auth = require('./lib/auth');

// Express Session
app.use(session({
  secret: 'secreeeeeeeeeet...!',
  resave: false,
  saveUninitialized: false
}));

mongoose.connect(env.dbUri);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('*', auth.checkAuthStatus);

app.use(router);

app.listen(env.port, () => {
  console.log('server is listening...');
});
