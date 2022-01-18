const { sequelize, Predmet} = require('../models');
const express = require('express');
const {validatePredmet} = require('../validation');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
    Predmet.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.get('/:id', (req, res) => {
    Predmet.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', (req, res) => {
  //  validatePredmet.validateAsync(req.body).then(obj => {
        obj = req.body;
        console.log(obj);
        Predmet.create(obj).then(row =>{
            console.log("Predmet je kreiran");
            console.log(row);
            res.json(row);
        }).catch(err => res.status(500).json(err));
    //}).catch(err => res.status(501).json(err));  
});


route.put("/:id", (req, res) => {
    validatePredmet.validateAsync(req.body).then(obj => {
        Predmet.findOne({ where: { id: req.params.id }}).then(predmet =>{
            predmet.naaziv = req.body.naaziv;
            predmet.brojESPPoena = req.body.brojESPPoena;
            predmet.opis = req.body.opis;
            predmet.prosecnaOcena = req.body.prosecnaOcena;
            predmet.save();
            res.json(predmet);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err)); 
});


route.delete('/:id', (req, res) => {
    Predmet.findOne({ where: { id: req.params.id }}).then(predmet =>{
        predmet.destroy();
        res.json(predmet);
    }).catch(err => res.status(500).json(err));
});

module.exports = route;