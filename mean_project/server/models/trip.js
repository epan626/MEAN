console.log('trip model')
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt')

var TripSchema = new mongoose.Schema({
  title: {
    type:String
  },
  creator:{
    type:String
  },
  start: {
    type:String
  },
  end: {
    type:String
  },
  pitStops: {
    type:Array
  },
  startadd :{
    type:String
  },
  endadd :{
    type:String
  },
  user: {type:mongoose.Schema.Types.ObjectId, ref:'User'}
}, {timestamps:true});

mongoose.model('Trip', TripSchema)
