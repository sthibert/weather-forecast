var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
require('es6-promise').polyfill();
require('isomorphic-fetch');

var port = 3001;
var app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function (req, res) {
  res.status(200).json({message: 'Server is running'});
});
app.get('/api.darksky', function (req, res) {
  var url = 'https://api.darksky.net/forecast/a167000535e5f7bf54535d2d23872d5f/50.85,4.35?extend=hourly&units=ca';
  console.log('Fetching ' + url);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (payload) {
      res.status(200).json(payload);
    })
    .catch(function (error) {
      res.status(500).json({message: 'Error occurred while requesting Dark Sky API', details: error});
    });
});

server.listen(port);
console.log('Server is listening on port ' + port);
