const { sequelize, Student} = require('../models');
const express = require('express');
const {validateStudent} = require('../validation');


const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
    Student.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.get('/:indeks', (req, res) => {
    Student.findOne({ where: { indeks: req.params.indeks } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', (req, res) => {
    validateStudent.validateAsync(req.body).then(obj => {
        obj = req.body;
        Student.create(obj).then(row =>{
            console.log("Student je kreiran");
            res.json(row);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err));  
});


route.put("/:id", (req, res) => {
    validateStudent.validateAsync(req.body).then(obj => {
        Student.findOne({ where: { id: req.params.id }}).then(student =>{
            student.ime = req.body.ime;
            student.prezime = req.body.prezime;
            student.email = req.body.email;
            student.sifra = req.body.sifra;
            student.indeks = req.body.indeks;
            student.smer = req.body.smer;
            student.godina = req.body.godina;
            student.save();
            res.json(student);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err)); 
});

route.delete('/:id', (req, res) => {
    Student.findOne({ where: { id: req.params.id }}).then(student =>{
        student.destroy();
        res.json(student);
    }).catch(err => res.status(500).json(err));
});

module.exports = route;