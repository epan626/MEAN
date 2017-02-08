var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, trim: true},
    last_name: {type: String, required: false, trim: true},
    password: {type: String, required: false},
    email: {type: String, required: false, trim: true},
    username: {type: String, required: false, trim: true},
    birthday: {type: Date, required: false}
  },
   {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}


  );


module.exports = mongoose.model('User', UserSchema);
