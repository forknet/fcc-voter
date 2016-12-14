const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.allposts = function(req, res, next){
  Poll.find({}, function(err, result){
    if (err){ console.error(err)};
    if (result === null){
      res.status(404).send("Not Found!")
    } else{
      res.send(result)
    }
  })
}
