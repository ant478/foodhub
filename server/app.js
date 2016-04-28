var express = require('express');
var passport = require('passport');
var morgan = require('morgan');
var cookie = require('cookie-parser');
var parser = require('body-parser');
var session = require('express-session');
var config = require('./config/config');
var routes = require('./routes/routes');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(morgan('combined'));

app.use(cookie());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(parser.urlencoded({
  extended: true
}));

app.use(parser.json());

app.use('/api/v1', routes.router);

app.listen(config.serverPort, function() {
  console.log('Server is on ' + config.serverPort + ' port.');
});
