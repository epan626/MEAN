console.log('user model')

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  username: {type:String, unique: true, required:[true, "Username is required."]},
  email: {
    type:String,
    unique: true,
    validate: {
      validator: function(email){
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
      },
      message: "Please provide a valid email."
    },
    required: [true, "Please provide a valid email"],
  },
  password:{type:String,
    // validate:{
    //   validator: function(password){
    //     var re = /^(?=.*?[a-z])(?=.*?[0-9]){8,32}/;
    //     return re.test(password);
    //   },
    //   message: "Password failed validation, password must be 8 characters in length with at least 1 number"
    // },
    required:[true, "Password is required"]
  },
  trips: [{type:mongoose.Schema.Types.ObjectId, ref:'Trip'}],
}, {timestamps:true});

//encrypt password only if password field has been modified
// userSchema.pre('save', function(done){
//   var user = this;
//   if(!user.isModified('password')){
//     return done()
//   }
//   var encryption = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8))
//   user.password = encryption
//   return done()
// });

mongoose.model('User', userSchema)
