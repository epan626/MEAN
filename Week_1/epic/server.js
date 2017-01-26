// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './static/views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

app.post('/butt', function(req, res){
  res.render("index", {data: req.body})
  console.log(req.body)
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");

var io = require('socket.io').listen(server);
var number = 0;
io.sockets.on('connection', function (socket) {

  socket.on('add_button_pressed', function (data){
    console.log(data)
    number += 1
    io.emit('update_number', {response: number})
  })
  socket.on('reset_button_pressed', function (data){
    console.log(data)
    number = 0;
    io.emit('update_number', {response: number})
  })
})
});
