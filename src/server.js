const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://user:user@cluster0-4er0j.mongodb.net/tindev?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.use(cors());
    server.use(express.json());
    server.use(routes);
    
    server.listen(3333);
  })
  .catch((e) => console.error(e));

