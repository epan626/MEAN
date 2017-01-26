var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  editpage: function(req, res) {
    console.log(req.params)
    User.find({_id: req.params.id}, function(err, users){
      if(err){
      res.json(err)
    } else {
      console.log(users)
      res.json(users)
    }
    })
  },
  update: function(req, res){
    console.log('atupdate')
    console.log(req.body)
    User.update({_id: req.body._id}, {first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}, function(err, users){
      if(err){
      res.json(err)
    } else {
      User.save
      console.log(users)
      res.json(users)
    }
    })
  }
}
