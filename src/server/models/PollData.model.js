const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollData = new Schema({
  title: String,
  description: String,
  labelOptions: Array,
  date: String
})

module.exports = mongoose.model('PollData', pollData)
