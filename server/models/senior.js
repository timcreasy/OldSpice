'use strict'

const mongoose = require('mongoose');

module.exports = mongoose.model("Senior", {
    "name": String,
    "email": String, 
    "password": String,
    "profile": {
        "age": Number,
        "gender": String,
        "location": String,
        "preferences": {
            "minAge": Number,
            "maxAge": Number,
            "gender": String
        }
    }
})