const User = require('../models/User.model');

exports.signup = function(req, res, next){
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password){
  return res.status(422).send({error: 'You must provide email/password'})
  }
  // See if a user with given eamil exist
  User.findOne({ email: email}, function(err, existingUser){
    if (err) { return next(err) ;}

    // If a user with email does exit, return err
    if (existingUser){
      console.log(existingUser, ': Email already exist')
      return res.status(402).send({error: "Email already exist!"})
    }

    // If a user does not exist, create and save user's record
    const user = new User({
      userName: userName,
      email: email,
      password: password
    })

    user.save(function(err){
      if (err) {return next(err)}
      res.send(user)
    })
    // Respond to request indiatication the user was created
  })

}
