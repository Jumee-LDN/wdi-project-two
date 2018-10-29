const express = require('express');
const app = express();
const env = require('./config/environment');
const router = require('./config/routes');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));


app.use('*', function(req, res, next){
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});

app.use(router);

app.listen(env.port, () => {
  console.log('server is listening...');
});
