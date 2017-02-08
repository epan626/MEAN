console.log('routes')
var request = require('request'),
    yelp = require('../controllers/yelpController.js'),
    User = require('../controllers/userController.js'),
    trip = require('../controllers/tripController.js')

//ROUTES HERE
module.exports = function(app){
  //testing static yelp route
  app.get('/data', function(req, res){
    yelp.request_yelp({ll: '34.13, -118.03'}, function(data){
      console.log(data)
    });
  });//end test route

  //yelp api call
  app.post('/yelp', yelp.initializeRequest);//END yelp api post

  app.post('/register', User.register)

  app.post('/login', User.login)

  app.get('/showloggeduser/:id', User.showloggeduser)

  app.post('/trip', trip.save)

  app.get('/trip/:id', trip.getTrip)

  app.get('/user/:id', User.showuser)

  app.get('/alltrips', trip.alltrips)

  app.get('/allusers', User.allusers)

  app.post('/get_yelp', yelp.initializeRequest)

};
