'use strict'

const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);


const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/oldspice';

// mongoose models
const Seniors = require('./models/senior.js')
const Chats = require('./models/chat.js')

app.use(express.static('client'));
app.use(json());
app.use(session({
    store: new RedisStore(),
    secret: 'oldspicesecretkey'
}));

app.use((req, res, next) => {
    if (req.session.email) {
    app.locals.email = req.session.email;
    }
    next();
})

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
        .findOneAndUpdate({"_id": userId}, updatedInformation, {upsert: true})
        .then(senior => res.status(200).json(senior))
        .catch(err)
})

app.get('/api/seniors/:userId', (req, res, err) => {
    const userId = req.params.userId

    Seniors
        .findById(userId)
        .then(senior => res.status(200).json(senior))
        .catch(err)
});

app.get('/api/chats/:chatId', (req, res, err) => {
    const chatId = req.params.chatId;
    Chats
        .find(chatId)
        .then(chat => res.status(200).json(chat))
        .catch(err)
})

app.post('/api/chats/:chatId', (req, res, err) => {
    const chatId = req.params.chatId;
    Chats 
        .find({ users_id: chatId })
        .then(chat => res.status(200).json(chat))
        .catch(err)
})




app.post('/api/login', ( { session, body: {email, password}}, res, err ) => {
    
    Seniors.findOne({ email })
        .then(user => {
            if (user && password === user.password) {
                session.user = user;
                res.status(200).json(session.user);
            } else {
                res.status(400).json(err)
            }
        })
})


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL, () => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`)
    });
});