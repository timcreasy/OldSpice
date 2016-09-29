const mongoose = require('mongoose')
const Messages = mongoose.model('messages', {
  author: String,
  message: String,
  id: String
})

module.exports = Messages;