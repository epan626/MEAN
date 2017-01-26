var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  show: function(req, res) {
    User.find({}, function(err, users){
      if(err){
      res.json(err)
    } else {
      res.json(users)
    }
    })
  },
  create: function(req, res){
    var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday})
    user.save(function(err, user){
      if(err){
        res.json(err)
      } else {
        res.json(user)
      }
    })
  },
  delete: function(req, res){
    User.remove({_id: req.body._id}, function(err, user){
      if(err){
        console.log('wrong')
      } else {
        console.log('waiting')
        res.json(user)
      }
    })
  },
  showone: function(req, res){
    User.find({_id: req.params.id}, function(err, user){
      if(err){
        console.console.log('wrong')
      } else{
        res.json(user)
      }
    })
  }
}
