'use strict'

const mongoose = require('mongoose');

module.exports = mongoose.model("Senior", {
    "email": String, 
    "password": String,
    "profile": {
        "name": String,
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