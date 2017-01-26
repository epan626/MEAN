var mongoose = require('mongoose')
var User = mongoose.model('User');
var bcrypt = require('bcrypt');


module.exports = {
  // show: function(req, res) {
  //   User.find({}, function(err, users){
  //     if(err){
  //     res.json(err)
  //   } else {
  //     res.json(users)
  //   }
  //   })
  // },
  create: function(req, res){
    User.find({email: req.body.email}, function(err, user){
      if(user){
        if(user[0]==undefined){
          var user = new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, password: req.body.password, birthday: req.body.birthday})
          user.save(function(err, user){
            if(err){
              console.log('error while creating user')
            } else {
              console.log('creating user')
            }
          })
      } else {
        res.json(user)
      }
      }
    })
  },
  login: function(req, res){
    console.log('here4')
    console.log(req.body)
    User.find({email: req.body.email}, function(err, user){
      console.log('here5')
      console.log(user)
      if(user){
          console.log('here5.5')
        if(user[0]==undefined){
        res.json('Your login does not exist')
        }
       else if (bcrypt.compareSync(req.body.password, user[0].password)==false) {
            console.log('here6')
            res.json('You entered the wrong password')
          } else {
            console.log('here7')
            res.json(user)
          }
      }
    })
  },
  loggeduser: function(req, res){
    console.log('here4')
    console.log(req.body)
    User.find({_id: req.body.cookie}, function(err, loggeduser){
      if(err){
        console.log('hey')
      }
      if(loggeduser){
        console.log('here5')
        res.json(loggeduser)
      }
    })
  }
  // },
  // delete: function(req, res){
  //   User.remove({_id: req.body._id}, function(err, user){
  //     if(err){
  //       console.log('wrong')
  //     } else {
  //       console.log('waiting')
  //       res.json(user)
  //     }
  //   })
  // },
  // showone: function(req, res){
  //   User.find({_id: req.params.id}, function(err, user){
  //     if(err){
  //       console.console.log('wrong')
  //     } else{
  //       res.json(user)
  //     }
  //   })
  // }
}
