var mongoose = require('mongoose');
var Product = require('../controllers/productControllerS.js');
var editProduct = require('../controllers/productEditControllerS.js');
var User = require('../controllers/userControllerS.js');
var Order = require('../controllers/orderControllerS.js');


module.exports = function(app){
  app.post('/createProduct', function(req, res){
    Product.createProduct(req, res)
  })
  app.get('/getProducts', function(req, res){
    console.log('here3')
    Product.getProducts(req, res)
  })
  app.get('/editpage/:id', function(req, res){
    console.log('here3')
    editProduct.editpage(req, res)
  })
  app.put('/updateProduct', function(req, res){
    editProduct.updateProduct(req, res)
  })
  app.delete('/deleteProduct/:id', function(req, res){
    editProduct.deleteProduct(req, res)
  })
  app.post('/add', function(req, res){
    User.create(req, res)
  })
  app.post('/login', function(req, res){
    User.login(req, res)
  })
  app.get('/loggeduser', function(req, res){
    User.loggeduser(req, res)
  })
  app.get('/allusers',  function(req, res){
    User.allusers(req, res)
  })
  app.post('/deleteuser', function(req, res){
    User.deleteuser(req, res)
  })
  app.put('/orderProduct', function(req, res){
    Order.orderproduct(req, res)
  })
  app.get('/showallorders', function(req, res){
    Order.showallorders(req, res)
  })
}
