'use strict';

const path = require('path');

module.exports = function(app) {
  // Insert routes below
  // app.use('/api/users', require('./api/user'));
  // app.use('/auth', require('./auth'));







  app.get('/favicon.ico', function(req, res) {
  	res.status(404);
  });

  app.use('/', require('./resource/page'));
  

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  .get(function(req, res){
    console.log("from here");
    res.status(404); 
  });







}
