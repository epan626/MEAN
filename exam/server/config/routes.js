var mongoose = require('mongoose');
// var Product = require('../controllers/productControllerS.js');
// var Post = require('../controllers/postControllerS.js');
var User = require('../controllers/userControllerS.js');
var Bucket = require('../controllers/bucketControllerS.js');


module.exports = function(app){
  app.post('/enter', function(req, res){
    User.enter(req, res)
  })
    app.get('/loggeduser/:id', function(req, res){
    User.loggeduser(req, res)
  })
    app.get('/allusers',  function(req, res){
    User.allusers(req, res)
  })
    app.post('/addlist', function(req, res){
    Bucket.addlist(req, res)
    })
    app.get('/showallbucket', function(req, res){
      Bucket.showallbucket(req, res)
    })
    app.get('/displayuser/:id', function(req, res){
      Bucket.displayuser(req, res)
    })
    app.put('/status', function(req, res){
      Bucket.status(req, res)
    })
    app.get('/showallbutone/:id', function(req, res){
      Bucket.showallbutone(req, res)
    })
    app.get('/allbutuser/:id', function(req, res){
      User.allbutuser(req, res)
    })
    app.get('/showmostbucket/:id', function(req, res){
      Bucket.showmostbucket(req, res)
    })

}
