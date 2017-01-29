var mongoose = require('mongoose')
var User = mongoose.model('User');
var Bucket = mongoose.model('Bucket');

module.exports = {
  addlist: function(req, res){
    User.findOne({_id: req.body.creator}, function(err, user){
      if(user){
        var bucket = new Bucket({title: req.body.title, description: req.body.description, _creator: user, creator: user.name, _tagged: req.body.tagged})
        bucket.save(function(err, bucket){
          if(err){
            console.log(err)
          } else{
            user._bucket.push(bucket)
            user.save()
            res.json(bucket)
          }
        })
      }
    })
  },

  showallbucket: function(req, res){
    Bucket.find({}, function(err, bucket){
      if(bucket){
        console.log(bucket)
        res.json(bucket)
      }
    })
  },
  displayuser: function(req, res){
    Bucket.find({_creator: req.params.id}, function(err, created){
      if(err){
        console.log(err)
      } else{
        Bucket.find({_tagged: req.params.id}, function(err, tagged){
          if(err){
            console.log(err)
          } else {
            var display = {}
            display.created = created
            display.tagged = tagged
            res.json(display)
          }
        })
      }
    })
  },
  status: function(req, res){
    Bucket.findOne({_id: req.body._id}, function(err, bucket){
      if(bucket.status==false){
        Bucket.update({_id: req.body._id}, {$set: {status: true}}, function(err, bucket){
          if(bucket){
            res.json(bucket)
          }
        })
      } else if(bucket.status==true){
        Bucket.update({_id: req.body._id}, {$set: {status: false}}, function(err, bucket){
          if(bucket){
            res.json(bucket)
          }
        })
      }
    })
  },
  showmostbucket: function(req, res){
    console.log('downn')
      console.log(req.params)
  }
}
