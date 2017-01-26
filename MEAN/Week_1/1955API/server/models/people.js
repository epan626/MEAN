var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
 name: String
})

var People = mongoose.model('People', PeopleSchema);
