var mongoose = require('mongoose');
var People = mongoose.model('People');
module.exports ={
  show: function(req, res){
    People.find({}, function(err, people){
      if(err){
        console.log('something wrong')
      } else {
        res.json({people: people})
      }
    })
  },
  new: function(req, res){
    console.log(req)
    var people = new People({name: req.params.name})
    console.log(people)
    people.save(function(err){
      if(err){
        console.log('something wrong')
      } else {
        console.log('successfully added a user')
        res.redirect('/')
      }
    })
  },
  remove: function(req, res){
    People.remove({name: req.params.name}, function(err){
      if(err){
        console.log('something wrong')
      } else {
        res.redirect('/')
      }
    })
  },
  name: function(req, res){
    People.find({name: req.params.name}, function(err, people){
      if(err){
        console.log('something wrong')
      } else {
        res.json({people: people})
      }
    })
  }
};
