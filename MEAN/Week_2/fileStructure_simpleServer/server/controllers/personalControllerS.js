var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
  showone: function(req, res) {

    console.log(req.params)
    User.find({_id: req.params.id}, function(err, users){
      if(err){
      res.json(err)
    } else {
      console.log('FINAL')
      console.log(users)
      res.json(users)
    }
    })
  }
}
