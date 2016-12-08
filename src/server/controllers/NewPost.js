const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.newpost = function(req, res, next){
  console.log(req.body)
  const title = req.body.title;
  const description = req.body.description;
  const labelOption = req.body.labelOption;

  const poll = new Poll({
    title: title,
    description: description,
    labelOption: labelOption,
    date: new Date()
  });

  poll.save(function(err) {
    if (err) { return next(err); }
    res.json({ message : 'Poll added!'})
  });
}

exports.getpost = function(req, res, next){
  Poll.find({}, function(err, data){
    console.log(data, 'is this what you are looking for?')
    res.send(data)
  })
}
