var mongoose = require('mongoose'),
    Schema   = mongoose.Schema


var CommentSchema = new mongoose.Schema({
  name:{type: String, require: true},
  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  comment: {type: String, require:true}
  }, {timestamps: true});


module.exports = mongoose.model('Comment', CommentSchema);
