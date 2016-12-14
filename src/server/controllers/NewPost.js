const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";
const moment = require('moment');

exports.newpost = function(req, res, next){
  let labelOptions = {};
  const title = req.body.title;
  const description = req.body.description;
  req.body.labelOptions.split(/,\s*/).map( prop =>{
    labelOptions[prop] = 0 // set counter to default 0
  })
  const userName = req.body.userName;

  const poll = new Poll({
    title: title,
    description: description,
    labelOptions: labelOptions,
    userName: userName,
    date: moment().format('MMM D, YYYY')
  });

  poll.save(function(err, document) {
    if (err) { return next(err); }
    res.json({id: document._id})
  });
}
