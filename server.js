//abrir o DockerToolbox
// npm run serve

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/', (req, res) =>{
    Product.create({
        title: "NodeJS",
        description: "Aula NodeJS",
        url: "https://github.com/FlavioCaruso/Aulas-NodeJS"
    })
    return res.send('Hello Flavio');
})

app.listen(3001);