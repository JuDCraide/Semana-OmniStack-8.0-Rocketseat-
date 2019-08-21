const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const server = express();
mongoose.connect('mongodb+srv://jdcraide:jdcraide@cluster0-jj6n3.mongodb.net/cursooministack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);