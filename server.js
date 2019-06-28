//abrir o DockerToolbox
// npm run dev

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();
app.use(express.json());

//Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);