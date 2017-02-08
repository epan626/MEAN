var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');

function yelpController(){
  var _this = this;
  //makes request to yelp api w/ 0.5 second delay
  function yelpHelper(arr, return_arr, num, callback){
    setTimeout(function(){
      _this.request_yelp(arr[num], function(data){
        return_arr.push(data)
      });
      if(num < arr.length){
        num ++;
        yelpHelper(arr, return_arr, num, callback)
      }
      else{
        if(callback){
          callback(return_arr)
        }
      };
    }, 300);
  };//end yelp helper

  _this.initializeRequest = function(req, res){
    var count = 0
    var coordinates = [];
    var results = [];
    for (var i = 0; i < req.body.length; i++){
      coordinates.push({ll: req.body[i]});
    };
    console.log('running yelp api...')
    yelpHelper(coordinates, results, count, function(data){
      res.json(data);
      console.log('yelp api returned all info')
    });
  }

  _this.request_yelp = function(set_parameters, callback) {
    /* The type of request */
    var httpMethod = 'GET';

    /* The url we are using for the request */
    var url = 'http://api.yelp.com/v2/search';

    var default_parameters = {
      limit: 5,
      radius: '8046',
      sort: 2,
      term:'restaurant'
    };

    /* We set the require parameters here */
    var required_parameters = {
      oauth_consumer_key : 'Y0VpeCqJUUh2fkXsVJchAA',
      oauth_token : 'saZnXP7C_5717ercXLoFxSm5HdoaRMqR',
      oauth_nonce : n(),
      oauth_timestamp : n().toString().substr(0,10),
      oauth_signature_method : 'HMAC-SHA1',
      oauth_version : '1.0'
    };

    /* We combine all the parameters in order of importance */
    var parameters = _.assign(default_parameters, set_parameters, required_parameters);

    /* We set our secrets here */
    var consumerSecret = 'Flolne5m3YzA5uzsfM2o8heTw9I';
    var tokenSecret = 'ikFnIdL7449mmtdBVdcETG6-TpA';

    /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
    /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
    var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

    /* We add the signature to the list of paramters */
    parameters.oauth_signature = signature;

    /* Then we turn the paramters object, to a query string */
    var paramURL = qs.stringify(parameters);

    /* Add the query string to the url */
    var apiURL = url+'?'+paramURL;

    /* Then we use request to send make the API Request */
    request(apiURL, function(error, response, body){
        return callback(body)
    });
  };
}





module.exports = new yelpController();
