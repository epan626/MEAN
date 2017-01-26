var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './static/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index", {});
})

app.post('/enter', function(req, res) {
 res.render('index');
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");


  var io = require('socket.io').listen(server);

  var users = [];

  io.sockets.on('connection', function (socket) {
    socket.on('new_user_enter', function (data){
      users.push({
      name: data.name,
      id: socket.id
      })
      io.emit('alert_join_user', {response: data.name})
      socket.emit('current_user', {current_user: data.name} )
    })

    socket.on('new_msg', function(data){
      io.emit("displaymsg", {new_message: data.message, user: data.user})
      })

    socket.on('disconnected', function(data){
      socket.broadcast.emit('user_dc', {response: data + ' has left the chatroom'})
    })
  })
})
