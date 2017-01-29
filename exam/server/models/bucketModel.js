var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var BucketSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5},
    description: {type: String, required: true, minlength: 10},
    status: {type: Boolean, default: false},
    _creator: {type: Schema.Types.ObjectId, ref: 'User'},
    creator: {type: String},
    _tagged: {type: Schema.Types.ObjectId, ref: 'User'}
  },
    {
      timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
  );


module.exports = mongoose.model('Bucket', BucketSchema);
