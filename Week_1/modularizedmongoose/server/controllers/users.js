var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports ={
  indexshow: function(req, res){
    User.find({}, function(err, users){
      if(err){
        console.log('something wrong');
      } else{
        res.render('index', {users: users})
      }
    })
  },
  personal: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      if(err){
        console.log('something wrong');
      } else {
        res.render('user', {user: user})
      }
    })
  },
  adduser: function(req, res){
    var user = new User({name: req.body.name, age: req.body.age, description: req.body.description});
    user.save(function(err){
      if(err){
        console.log('someting wong');
      }else{
        console.log("successfully added a user")
        res.redirect('/');
      }
    })
  },
  edituserpage: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      if(err){
        console.log('something wrong');
      } else {
        res.render('edit', {user: user})
      }
    })
  },
  edit: function(req, res){
    User.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, description: req.body.description}, function(err){
    if(err){
      console.log('something wrong');
    } else{
      console.log('successfully edited')
      res.redirect('/');
      }
    })
  },
  deletepage: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      if(err){
        console.log('something wrong');
      } else {
        res.render('delete', {user: user})
      }
    })
  },
  delete: function(req, res){
    User.remove({_id: req.params.id}, function(err){
      if(err){
        console.log('something wrong');
      } else {
        res.redirect('/')
      }
    })
  }
}
