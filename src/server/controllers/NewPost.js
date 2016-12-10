const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";
const moment = require('moment');

exports.newpost = function(req, res, next){
  let labelOptions = {};
  const title = req.body.title;
  const description = req.body.description;
  // console.log(typeof req.body.labelOptions)
  // const labelOptions = req.body.labelOptions.split(/,\s*/).map( option =>{
  //   let rObj = {};
  //   rObj[option] = 0;
  //   return rObj;
  // })
  req.body.labelOptions.split(/,\s*/).map( prop =>{
    console.log(prop)
    labelOptions[prop] = 0 // set counter to default 0
  })

  console.log(labelOptions, '~~~~~~~~~~~~~~~')

  const poll = new Poll({
    title: title,
    description: description,
    labelOptions: labelOptions,
    date: moment().format('MMM D, YYYY')
  });

  poll.save(function(err) {
    if (err) { return next(err); }
    res.json({ message : 'Poll added!'})
  });
}

exports.getpost = function(req, res, next){
  Poll.find({}, function(err, data){
    res.send(data)
  })
}
