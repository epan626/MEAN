var mongoose = require('mongoose')
var User = mongoose.model('User');

// ====================  USERS SERVER CONTROLLER  =================== //

module.exports = {

// ======================  USER SERVER CREATOR START ======================== //
  enter: function(req, res){
    User.findOne({name: req.body.first_name}, function(err, user){
      if(!user){
        var user = new User({name: req.body.first_name})
        user.save(function(err, user){
            if(err){
              console.error('Error 1: '.red + err)
            } else {
              console.log('Success 1: CREATING -- '.green + user)
              res.json(user)
            }
          })
      } else {
        res.json(user)
      }
    })
  },
  // ======================  USER SERVER CREATOR END ======================== //

// =========================  USER/S SERVER DISPLAY START======================= //
  displayLoggedUser: function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
      if(err){
        console.error('Error 2: '.red + err);
      } else{
        console.log('Success 2: DISPLAYING -- '.green + user)
        res.json(user)
      }
    })
  },

  displayAllUsers: function(req, res){

  User.find({}, function(err, users){
    if(err){
       console.error('Error 3: '.red + err);
   } else {
       console.log('Success 3: DISPLAYING -- '.green + users)
     res.json(users)
   }
  })
}

// =========================  USER/S SERVER DISPLAY END ======================= //













// ==================== USER SERVER CONTROLLER END  ===================== //
};
// =============================  END  ================================== //
