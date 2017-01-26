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
app.get('/result', function(req, res) {
 res.render("result");
})
app.post('/process', function(req, res) {
 res.render('index', {process: req.body});
})



// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.on('posting_form', function (data){
    console.log(data)
    socket.emit('random_number', {response: 'Your lucy number emitted by the server is 773 ' + Math.floor(Math.random()*1000+1)}),
    socket.emit('update_message', {response: 'You emitted the following information to the server. {name:' +' ' +  data.name + ', location:  ' +data.location + ', language: ' + data.language + ', comment: ' + data.comment})
  })
})
});
