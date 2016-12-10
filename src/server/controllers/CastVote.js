const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.update = function(req, res, next){
  let id = req.params.id;
  let labelOption = req.query.labelOption;
  let query =  `labelOptions.${labelOption}`
  let obj = {
    [query] : 1
  }
  Poll.findByIdAndUpdate(
    id,
    {$inc: obj },
    function(err, document){
      if (err) { console.log(err)}
      res.send(document)
    }
  )
}
