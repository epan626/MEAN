var mongoose = require('mongoose');
var User = require('../controllers/userControllerS.js');


module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index')
  })
  app.post('/add', function(req, res){
    User.create(req, res)
  })
  app.post('/login', function(req, res){
    User.login(req, res)
  })
  app.post('/loggeduser', function(req, res){
    console.log('here3')
    console.log(req.body)
    User.loggeduser(req, res)
  })

}
