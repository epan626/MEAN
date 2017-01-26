var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    bcrypt   = require('bcrypt'),
    Post = mongoose.model('Post'),
    Comment = mongoose.model('Comment');
    SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
    username: {
      type: String,
      maxlength: 20,
      unique: true,
      required: [true, 'Username is required']
    },
    password: {
      type: String,
      required: [true, 'A password is required'],
      minlength: 3
    },
    _post: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    _comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  },
    {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
    });

UserSchema.pre('save', function(next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
      // hash the password along with our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

  UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });

};


module.exports = mongoose.model('User', UserSchema);
