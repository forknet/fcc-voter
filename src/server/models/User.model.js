const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

userSchema.pre('save', function(next){
  const user = this; // access to user model (it is instance of user Model)

  // generate a salt, then run a callback
  bcrypt.genSalt(10, function(err, salt){
    if (err) { return next(err);}

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) { return next(err);}

      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    })
  })
});


module.exports = mongoose.model('user', userSchema)
