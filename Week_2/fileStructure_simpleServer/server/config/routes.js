var mongoose = require('mongoose');
var User = require('../controllers/userControllerS.js');
var Personal = require('../controllers/personalControllerS.js');
var Edit = require('../controllers/editControllerS.js');

module.exports = function(app){
  // app.get('/', function(req, res){
  //   res.render('index')
  // })
  app.get('/show', function(req, res){
    User.show(req, res)
  })
  app.post('/add', function(req, res){
    User.create(req, res)
  })
  app.post('/delete', function(req, res){
    User.delete(req, res)
  })
  app.get('/showone/:id', function(req, res){
    Personal.showone(req, res)
  })
  app.get('/editpage/:id', function(req, res){
    console.log(req.params.id)
    Edit.editpage(req, res)
  })
  app.post('/update/', function(req, res){
    console.log('here3')
    console.log(req.body)
    Edit.update(req, res)
  })

}
