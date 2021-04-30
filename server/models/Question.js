const mongoose = require("mongoose");

module.exports = mongoose.model("Question", {

  topic: String,
  question: String,
  answer: String,
  points: Number,
  answered: ''
});


