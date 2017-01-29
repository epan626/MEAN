var mongoose = require('mongoose');
// ====================== CONTROLLERS ====================== //
var User = require('../controllers/userControllerS.js');


//====================== ROUTES ========================== //
module.exports = function(app){
  app.post('/enter', function(req, res){
    User.enter(req, res)
  })
    app.get('/displayLoggedUser/:id', function(req, res){
    User.displayLoggedUser(req, res)
  })
    app.get('/displayAllUsers',  function(req, res){
    User.displayAllUsers(req, res)
  })






// ====================== END ==========================  //
};
