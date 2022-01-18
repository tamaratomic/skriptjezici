const { sequelize, Profesor} = require('../models');
const express = require('express');
const {validateProfesor} = require('../validation');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
    Profesor.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.get('/:id', (req, res) => {
    Profesor.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', (req, res) => {
    validateProfesor.validateAsync(req.body).then(obj => {
        obj = req.body;
        Profesor.create(obj).then(row =>{
            console.log("Profesor je kreiran");
            res.json(row);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err));  
});


route.put("/:id", (req, res) => {
    validateProfesor.validateAsync(req.body).then(obj => {
        Profesor.findOne({ where: { id: req.params.id }}).then(profesor =>{
            profesor.ime = req.body.ime;
            profesor.prezime = req.body.prezime;
            profesor.zvanje = req.body.zvanje;
            profesor.prosecnaOcena = req.body.prosecnaOcena;
            profesor.save();
            res.json(profesor);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err)); 
});


route.delete('/:id', (req, res) => {
    Profesor.findOne({ where: { id: req.params.id }}).then(profesor =>{
        profesor.destroy();
        res.json(profesor);
    }).catch(err => res.status(500).json(err));
});

module.exports = route;