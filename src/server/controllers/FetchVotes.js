const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.getvotes = function(req, res, next){
  Poll.find({}, function(err, data){
    res.send(data)
  })
}
