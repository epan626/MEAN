var mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    reg = new RegExp( ".js$", "i" ),
    models_path = path.join(__dirname, './../models'),
    dbURI = 'mongodb://localhost/{{DATABASE}}';


mongoose.connect( dbURI );

mongoose.connection.on( 'connected', function () {
  console.log( `Mongoose default connection open to ${ dbURI }`.green );
});
mongoose.connection.on( 'error', function ( err ) {
  console.error( `Mongoose default connection error: ${ err }`.red );
});
mongoose.connection.on( 'disconnected', function () {
  console.log( 'Mongoose default connection disconnected'.teal );
});
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination'.teal );
    process.exit( 0 );
  });
});


fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
});
