const express = require('express');
const app = express();
const env = require('./config/environment');

const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('pages/home');
});

app.use('*', function(req, res, next){
  console.log('Incoming request', req.method, req.originalUrl);
  next();
});

app.listen(env.port, () => {
  console.log('server is listening...');
});
