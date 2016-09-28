'use strict'

const mongoose = require('mongoose');

module.exports = mongoose.model("Chat", {
    "users_id": [String],
    "userNames": [String],
    "message": [{
        "author": String,
        "message": String, 
        "time": { type: Date, default: Date.now }
    }]
})