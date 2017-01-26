var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

mongoose.connect('mongodb://localhost/quote');
var UserSchema = new mongoose.Schema({
 name: String,
 quote: String,
 created_at: Date
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

app.post('/process', function(req, res) {
  var user = new User({name: req.body.name, quote: req.body.quote, created_at:Date()})
  user.save(function(err){
    if(err){
      console.log('something wrong')
    } else{
      User.find({}, function(err, users){
        if(err){
          console.log('something wrong')
        } else{
          console.log(users)
          res.redirect('/quote')
        }
      })
    }
  })
})

app.get('/quote', function(req, res){
  User.find({}, function(err, users){
    if(err){
      console.log('something wrong')
    } else{
      res.render('quote', {users: users})
    }
  })
})

app.post('/delete/:id', function(req, res){
  User.remove({_id: req.params.id}, function(err){
    if(err){
      console.log('something wrong')
    }else{
      User.find({}, function(err, users){
        if(err){
          console.log('something wrong')
        } else{
          res.redirect('/quote')
        }
      })
    }
  })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
