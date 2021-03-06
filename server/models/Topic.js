const mongoose = require('mongoose')

module.exports = mongoose.model('Topic', {
  title: String,
  questions: [{ type: mongoose.ObjectId, ref: 'Question' }],
})
