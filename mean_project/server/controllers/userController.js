var mongoose = require('mongoose')
var User = mongoose.model('User');
var bcrypt = require('bcrypt');
module.exports = {
  register: function(req, res){
    User.findOne({email: req.body.email}, function(err, user){
      if(!user){
        User.findOne({username: req.body.username}, function(err, username){
          if(!username){
            var hashpw = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))
            var user = new User({email: req.body.email, username: req.body.username, password: hashpw})
            user.save(function(err, user){
              if(err){
                console.error('Error 1: '+err)
              } else {
                console.log('Success 1: '+user)
                res.json(user)
              }
            })
          } else {
            if(username){
              res.json('This username already exist!')
            }
          }
        })
      } else {
        if(user){
          res.json('This email already exist!')
        }
      }
    })
  },
  login: function(req, res){
    console.log('here3');
    User.findOne({email: req.body.email}, function(err, user){
      console.log(err)
      console.log(user)
      if(!user){
        res.json('Your login is incorrect')
        }
       else if (bcrypt.compareSync(req.body.password, user.password)==false) {
        res.json('Your password is incorrect')
        } else {
          console.log('logged in');
          console.log(user);
          res.json(user)
        }
    })
  },
  showloggeduser: function(req, res){
    User.findOne({_id: req.params.id}, function(err, loggeduser){
      if(loggeduser){
        console.log('here');
        console.log(loggeduser);
        res.json(loggeduser)
      }
    })
  },

  showuser: function(req, res){
    User.findOne({_id: req.params.id}).populate('trips').exec (function(err, user){
      if(user){
        console.log(user);
        res.json(user)
      }
    })
  },

  allusers: function(req, res){
    User.find({}).populate('trips').exec (function(err, user){
      if(user){
        console.log(user);
        res.json(user)
      }
    })
  }
}
