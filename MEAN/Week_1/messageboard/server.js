var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageboard');
var Schema = mongoose.Schema

var PostSchema = new mongoose.Schema({
 name: {type: String, require:true, minlength: 4},
 message: {type: String, require:true},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
 }, {timestamps: true});
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 name: {type: String, require:true, minlength: 4},
 comment: {type: String, require:true}
 }, {timestamps: true});

var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);

app.get('/', function(req, res) {
  Post.find({})
  .populate('comments')
  .exec(function(err, posts){
    if(err){
      console.log('something wrong');
    } else{
      res.render('index', {posts: posts})
    }
  })
})

app.post('/msg', function(req,res){
  var post = new Post(req.body)
  post.save(function(err){
    if(err){
      console.log('something wrong')
    } else {
      res.redirect('/')
    }
  })
})

app.post('/comment/:id', function(req, res){
  console.log(req.body)
  Post.findOne({_id: req.params.id}, function(err, post){
    var comment = new Comment(req.body);
    comment._post = post._id;
    post.comments.push(comment);
    comment.save(function(err){
      post.save(function(err){
        if(err){
          console.log('error');
        } else {
          res.redirect('/')
        }
      })
    })
  })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
