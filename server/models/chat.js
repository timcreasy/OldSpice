'use strict'

const mongoose = require('mongoose');

module.exports = mongoose.model("Chat", {
    "users": [
      {
        userId: String,
        userName: String
      },
      {
        userId: String,
        userName: String
      }
    ],
    "message": [{
        "author": String,
        "message": String,
        "time": { type: Date, default: Date.now }
    }]
})