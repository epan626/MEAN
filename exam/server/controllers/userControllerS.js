var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  enter: function(req, res){
    User.findOne({name: req.body.name}, function(err, user){
      if(!user){
        var user = new User({name: req.body.name})
        user.save(function(err, user){
            if(err){
              console.log('error while creating user')
            } else {
              console.log('creating user ' + user)
              res.json(user)
            }
          })
      } else {
        res.json(user)
      }
    })
  },
  loggeduser: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.log(err)
      } else{
        res.json(user)
      }
    })
  },
  allusers: function(req, res){
  User.find({}, function(err, users){
    if(err){
     console.log('error locating all users')
   } else {
     res.json(users)
   }err
  })
},
  allbutuser: function(req, res){
    console.log('=========start=======')
    User.find({_id: {$ne: req.params.id}}, function(err, users){
      if(err){
       console.log('error locating all butusers')
     } else {
       console.log('here1324567897654321`23456');
       console.log(users);
       res.json(users)
     }
  })
}

};
