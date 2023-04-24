const express = require('express');
const app = express();
const allRoutes = require('../routes/index');

app.use(express.json());

const urlEncode = express.urlencoded({extended: false})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
});

app.get('/rickandmorty', allRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'My First Server in Express!'
    })
});

module.exports = app;