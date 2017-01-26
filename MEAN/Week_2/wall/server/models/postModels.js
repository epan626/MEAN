var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var PostSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  name:{type: String, require: true},
  message: {type: String, require:true},
  _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});


module.exports = mongoose.model('Post', PostSchema);
