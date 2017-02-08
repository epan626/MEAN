console.log('mongo connection, mongoose setup');
//require mongoose module
var mongoose = require('mongoose');
//require fs module
var fs = require('fs');
//require path for getting the model paths
var path = require('path');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models')
//Regular expression that checks for .js extension
var reg = new RegExp(".js$", "i")
//database information
var dbURI = 'mongodb://localhost/roadtrip'

//connect to the mongodb database using mongoose
mongoose.connect( dbURI)

//CONNECTION EVENTS
//sucessful connection
mongoose.connection.on("connected", function(){
  console.log(`mongoose default connection open to ${dbURI}`)
});

//if connection throws an error
mongoose.connection.on("error", function(err){
  console.error(`mongoose default connection error: ${err}`)
});

//when server disconnects
mongoose.connection.on("disconnected", function(){
  console.log("mongoose default connection disconnected")
});

//close mongoose connection if node process ends
process.on("SIGINT", function(){
  mongoose.connection.close(function(){
    console.log("mongoose default connection disconnected through app termination")
    process.exit(0);
  });
});

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
