var mongoose = require('mongoose');
var users = require('../controllers/users.js')
module.exports = function(app){
  app.get('/', function(req, res) {
    users.indexshow(req, res)
  })
  app.get('/users/new/', function(req, res) {
    res.render('new')
  })
  app.get('/users/:id', function(req, res){
    users.personal(req, res)
  })
  app.post('/users', function(req, res) {
    users.adduser(req, res)
  })

  app.get('/edit/:id', function(req,res){
    users.edituserpage(req, res)
  })

  app.post('/edit/:id', function(req, res){
    users.edit(req, res)
  })

  app.get('/delete/:id', function(req, res){
    users.deletepage(req, res)
  })

  app.post('/delete/:id', function(req, res){
    users.delete(req, res)
  });
}
