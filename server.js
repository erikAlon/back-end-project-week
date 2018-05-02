// Let's use express, body-parser, and morgan
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const User = require('./user__model.js');
// const Note = require('./note__model.js');
const server = express();
server.use(bodyParser.json());
server.use(morgan('conbined'));

server.post('/api/user/create', (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save().then(saveduser => {
    res.status(200).json(saveduser);
  });
});

server.post('/api/note/create', (req, res) => {
  const { title, content } = req.body;
  const 
})

// server.get();

// server.put();

// server.delete();

module.exports = server;
