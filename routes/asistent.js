const { sequelize, Asistent} = require('../models');
const express = require('express');
const {validateAsistent} = require('../validation');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
    Asistent.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.get('/:id', (req, res) => {
    Asistent.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', (req, res) => {
    validateAsistent.validateAsync(req.body).then(obj => {
        obj = req.body;
        Asistent.create(obj).then(row =>{
            console.log("Asistent je kreiran");
            res.json(row);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err));  
});


route.put("/:id", (req, res) => {
    validateAsistent.validateAsync(req.body).then(obj => {
        Asistent.findOne({ where: { id: req.params.id }}).then(asistent =>{
            asistent.ime = req.body.ime;
            asistent.prezime = req.body.prezime;
            asistent.prosecnaOcena = req.body.prosecnaOcena;
            asistent.save();
            res.json(asistent);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err)); 
});


route.delete('/:id', (req, res) => {
    Asistent.findOne({ where: { id: req.params.id }}).then(asistent =>{
        asistent.destroy();
        res.json(asistent);
    }).catch(err => res.status(500).json(err));
});

module.exports = route;