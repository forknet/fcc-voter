const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.getpost = function(req, res, next){
  let id = req.params.id
  Poll.findOne({'_id' : id}, function(err, result){
    if (err){ console.error(err)};
    if (result === null){
      res.status(404).send("Not Found!")
    } else{
      res.send(result)
    }
  })
}
