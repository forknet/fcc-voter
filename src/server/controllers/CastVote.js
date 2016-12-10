const Poll = require('../models/PollData.model');
const db =  "mongodb://localhost:voteapp/voteapp";

exports.update = function(req, res, next){
  let id = req.params.id;
  let labelOption = req.query.labelOption;
  console.log(id)
  Poll.findOneAndUpdate(
    {'_id' :  id},
    {$inc: {"labelOptions.$.Kenzo": 1 }},
    function(err){
      console.log(err)
    })


    // poll["labelOptions"].forEach( prop =>{
    //   if(prop[labelOption]){
    //     console.log(prop)
    //     console.log(labelOption)
    //     // $set: { name: 'jason borne' }
    //     // {$inc: {labelOption:1}}
    //   }
    // })

}
