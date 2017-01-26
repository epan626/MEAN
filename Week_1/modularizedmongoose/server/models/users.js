var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number,
 description: String,
 myid: Number
})

var User = mongoose.model('User', UserSchema);
