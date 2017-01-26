var mongoose = require('mongoose')
var Product = mongoose.model('Product');


module.exports = {
  // show: function(req, res) {
  //   User.find({}, function(err, users){
  //     if(err){
  //     res.json(err)
  //   } else {
  //     res.json(users)
  //   }
  //   })
  // },
  createProduct: function(req, res){
    console.log(req.body)
    var product = new Product({name: req.body.name, description: req.body.description, image: req.body.image, quantity: req.body.quantity})
    product.save(function(err, product){
      if(err){
        console.log(err)
        res.json('Error while creating product')
      } else {
        console.log('Creating ' + product)
        Product.find({}, function(err, allproducts){
          console.log('sending over products')
          res.json(allproducts)
      })
    }
  })},
  getProducts: function(req, res){
    console.log('here4')
    Product.find({}, function(err, products){
      if(err){
        console.log('Error occurred locating products')
      } else {
        console.log('sending over products')
        res.json(products)
      }
    })
  }
  // create: function(req, res){
  //   console.log(req.body)
  //   User.find({username: req.body.username}, function(err, user1){
  //     if(user1){
  //       if(user1[0]==undefined){
  //         var user = new User({username: req.body.username, password: req.body.password})
  //         user.save(function(err, user){
  //           if(err){
  //             console.log(err)
  //             console.log('error while creating user')
  //           } else {
  //             console.log(user)
  //             console.log('creating user')
  //           }
  //         })
  //     } else {
  //       res.json(user)
  //     }
  //     }
  //   })
  // },
  // login: function(req, res){
  //   console.log('here4')
  //   console.log(req.body)
  //   User.find({username: req.body.username}, function(err, user){
  //     console.log('here5')
  //     console.log(user)
  //     if(user){
  //         console.log('here5.5')
  //       if(user[0]==undefined){
  //       res.json('Your username does not exist')
  //       }
  //      else if (bcrypt.compareSync(req.body.password, user[0].password)==false) {
  //           console.log('here6')
  //           res.json('You entered the wrong password')
  //         } else {
  //           console.log('here7')
  //           res.json(user)
  //         }
  //     }
  //   })
  // },
  // loggeduser: function(req, res){
  //   User.find({_id: req.body.cookie}, function(err, loggeduser){
  //     if(err){
  //       console.log('error')
  //     }
  //     if(loggeduser){
  //       res.json(loggeduser)
  //     }
  //   })
  // },
  // postmsg: function(req, res){
  //   User.find({_id: req.body._id}, function(err, user){
  //     if(err){
  //       console.log('error')
  //     } else{
  //       console.log(user)
  //       var post = new Post({_user: req.body._id, message: req.body.message, name: user[0].username})
  //       user[0]._post.push(post)
  //       post.save(function(err){
  //         if(err){
  //           console.log('post save error')
  //         }
  //         user[0].save(function(err){
  //           if(err){
  //             console.log(err)
  //           } else {
  //             console.log('yes')
  //             res.json('Successfully added post')
  //           }
  //         })
  //       })
  //     }
  //   })
  // },
  // showpost: function(req, res){
  //   Post.find({})
  //   .populate('_comments')
  //   .exec(function(err, posts){
  //     if(err){
  //       console.log('something wrong')
  //     } else {
  //       res.json(posts)
  //     }
  //     })
  //   },
  //   createcomment: function(req, res){
  //     User.find({_id: req.body.tempcookie}, function(err, user){
  //       if(err){
  //         console.log('error finding user')
  //       } else{
  //         Post.find({_id: req.body._id}, function(err, post){
  //           if(err){
  //             console.log('error finding post')
  //           } else {
  //             var comment = new Comment({name: user[0].username, _post:req.body._id, _user: req.tempcookie, comment: req.body.tempcomment})
  //             user[0]._comment.push(comment)
  //             post[0]._comments.push(comment)
  //             comment.save(function(err){
  //               if(err){
  //                 console.log('comment save error')
  //               }
  //               user[0].save(function(err){
  //                 if(err){
  //                   console.log(err)
  //                 } else {
  //                   post[0].save(function(err){
  //                     if(err){
  //                       console.log(err)
  //                     } else {
  //                       console.log('yes')
  //                       res.json('Successfully added comment')
  //                     }
  //                   })
  //                 }
  //               })
  //             })
  //           }
  //         })
  //       }
  //     })
  //   }
};
