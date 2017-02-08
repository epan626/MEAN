//configure server and require all needed modules
var express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express()


//set static paths for the app
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));

// Integrate body-parser with our App
app.use(bp.json())

//require the mongoose configuration file
require('./server/config/mongoose.js')

//require the routes.js file
var routes_setter = require('./server/config/routes.js')
//invoke the routes_setter funciton and pass it the app variable
routes_setter(app);

//tell server to listen on port 8000
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
