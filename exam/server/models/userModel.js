var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    _bucket: [{type: Schema.Types.ObjectId, ref: 'Bucket'}]
  },
    {
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'
    }
  });


module.exports = mongoose.model('User', UserSchema);
