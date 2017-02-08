console.log('trip controller')
var mongoose = require('mongoose')
var Trip = mongoose.model('Trip')
var User = mongoose.model('User')
function tripController(){
  var _this = this;

  _this.save = function(req, res){
    console.log(req.body[0]);
    User.findOne({_id: req.body[0].user}, function(err, user1){
      if(user1){
        var trip = new Trip({
          title: req.body[0].title,
          start: req.body[0].start,
          end: req.body[0].end,
          pitStops: req.body[0].waypoints,
          startadd: req.body[0].startadd,
          endadd: req.body[0].endadd,
          creator: user1.username,
          user: req.body[0].user
        })
        trip.save(function(err, trip){
          if(trip){
            User.findOneAndUpdate({_id: req.body[0].user}, {$addToSet: {trips: trip._id}}, function(err, user){
              if(user){;

              } else {
                console.error(err);
                console.error('Error updating user with trip');
              }
            })
          }
          res.json(trip);
        });
      }})
  }//end trip save

  _this.getTrip = function(req, res){
    console.log(req.params.id)
    Trip.findOne({_id: req.params.id}, function(err, trips){
      console.log(trips)
      res.json(trips)
    })
  },

  _this.alltrips = function(req, res){
    Trip.find({}, function(err, trips){
      if(trips){
        console.log(trips);
        res.json(trips)
      }
    })
  }

}//end trip controller



module.exports = new tripController();
