'use strict'

const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');

const app = express()
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/oldspice';

// mongoose models
const Seniors = require('./models/senior.js')
const Chats = require('./models/chat.js')

app.use(express.static('client'));
app.use(json());

app.get('/api/seniors', (req, res, err) => {
    Seniors
        .find()
        .then((seniorObject) => {
            res.json( { seniorObject } )
        })
        .catch(err)
});


app.post('/api/seniors', (req, res, err) => {
    Seniors
        .create(req.body)
        .then(senior => res.status(201).json(senior))
        .catch(err)
}) 

app.get('/api/chats', (req, res, err) => {
    Chats  
        .find()
        .then((chatObject) => {
            res.json( { chatObject} )
        })
        .catch(err)
})

app.post('/api/chats', (req, res, err) => {
    Chats
        .create(req.body)
        .then(chat => res.status(201).json(chat))
        .catch(err)
})

app.put('/api/seniors/:userId', (req, res, err) => {
    const updatedInformation = req.body;
    const userId = req.params.userId;
    Seniors
        .findByIdAndUpdate(userId, updatedInformation, (err, result) => {
            if(err) {console.log(err)}
        })
        .then(senior => res.status(200).json(senior))
        .catch(err)
})


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL, () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
    });
});
