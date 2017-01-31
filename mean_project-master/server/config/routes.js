console.log('routes')
var request = require('request')


module.exports = function(app){
  app.get('/data', function(req, res){
    console.log('here')
    // var request_data = {
    //     "request": {
    //       "slice": [
    //         {
    //           "origin": "BUR",
    //           "destination": "PDX",
    //           "date": "2017-03-21"
    //         },
    //         {
    //           "origin": "PDX",
    //           "destination": "BUR",
    //           "date": "2017-03-25"
    //         }
    //       ],
    //       "passengers": {
    //         "adultCount": 1,
    //         "infantInLapCount": 0,
    //         "infantInSeatCount": 0,
    //         "childCount": 0,
    //         "seniorCount": 0
    //       },
    //       "solutions": 20,
    //       "refundable": false
    //     }
      // "request": {
      //   "passengers": {
      //     "kind": "qpxexpress#passengerCounts",
      //     "adultCount": 1,
      //     "childCount": 0,
      //     "infantInLapCount": 0,
      //     "infantInSeatCount": 0,
      //     "seniorCount": 0
      //   },
      //   "slice": [
      //     {
      //       "kind": "qpxexpress#sliceInput",
      //       "origin": 'BUR',
      //       "destination": 'PDX',
      //       "date": '2017-03-21',
      //       "maxStops": '3',
      //       "maxConnectionDuration": '3',
      //       "preferredCabin": '',
      //       "permittedDepartureTime": {
      //         "kind": "qpxexpress#timeOfDayRange",
      //         "earliestTime": '',
      //         "latestTime": ''
      //       },
      //       "permittedCarrier": [
      //         ''
      //       ],
      //       "alliance": '',
      //       "prohibitedCarrier": [
      //         ''
      //       ]
      //     }
      //   ],
      //   "maxPrice": '500',
      //   "saleCountry": '',
      //   "ticketingCountry": '',
      //   "refundable": false,
      //   "solutions": 10
      // }
    // }
    // var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBNrvYzQTkjbIxf3TM7EmaGiQdD6tednpY'
    // request({
    //   url: url,
    //   method: "POST",
    //   json: true,
    //   json: request_data
    // }, function(error, response, body){
    //   console.log("===============================Error=====================================")
    //   console.log(error)
    //   console.log("===============================Response=====================================")
    //   console.log(response)
    //   console.log("===============================Body=====================================")
    //   console.log(body)
    //   res.json(body)
    // });
  });
}
