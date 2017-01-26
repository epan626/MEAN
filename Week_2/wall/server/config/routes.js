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
    User.loggeduser(req, res)
  })
  app.post('/postmsg', function(req, res){
    User.postmsg(req, res)
  })
  app.post('/showPost', function(req, res){
    console.log('here3')
    User.showpost(req, res)
  })
  app.post('/createcomment', function(req, res){
    console.log('here3')
    User.createcomment(req, res)
  })
}
