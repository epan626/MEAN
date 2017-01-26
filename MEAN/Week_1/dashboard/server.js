var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number,
 description: String,
 myid: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  User.find({}, function(err, users){
    if(err){
      console.log('something wrong');
    } else{
      res.render('index', {users: users})
    }
  })
})
app.get('/users/new/', function(req, res) {
  res.render('new')
})
app.get('/users/:id', function(req, res){
  console.log(req.params.id)
  User.find({_id: req.params.id}, function(err, user){
    if(err){
      console.log('something wrong');
    } else {
      console.log(user)
      res.render('user', {user: user})
    }
  })
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age, description: req.body.description});
    user.save(function(err){
      if(err){
        console.log('someting wong');
      }else{
        console.log("successfully added a user")
        console.log(user)
        res.redirect('/');
      }
    })
})

app.get('/edit/:id', function(req,res){
  User.find({_id: req.params.id}, function(err, user){
    if(err){
      console.log('something wrong');
    } else {
      console.log(user)
      res.render('edit', {user: user})
    }
  })
})

app.post('/edit/:id', function(req, res){
  console.log(req.params.id)
    User.update({_id: req.params.id}, {name: req.body.name, age: req.body.age, description: req.body.description}, function(err){
    if(err){
      console.log('something wrong');
    } else{
      console.log('successfully edited')
      res.redirect('/');
    }
})
})

app.get('/delete/:id', function(req, res){
  User.find({_id: req.params.id}, function(err, user){
    if(err){
      console.log('something wrong');
    } else {
      console.log(user)
      res.render('delete', {user: user})
    }
})
})

app.post('/delete/:id', function(req, res){
  User.remove({_id: req.params.id}, function(err){
    if(err){
      console.log('something wrong');
    } else {
      User.find({}, function(err, users){
      if(err){
        console.log('something wrong');
      } else{
        res.render('index', {users: users})
      }
    })
  }
})
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
