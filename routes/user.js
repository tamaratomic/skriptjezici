const { sequelize, User} = require('../models');
const express = require('express');
const {validateUser} = require('../validation');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));


route.get('/', (req, res) => {
    User.findAll()
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.get('/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id } })
        .then( rows => res.json(rows) )
        .catch( err => res.status(500).json(err) );
});

route.post('/', (req, res) => {
    validateUser.validateAsync(req.body).then(obj => {
        obj = req.body;
        User.create(obj).then(row =>{
            console.log("User je kreiran");
            res.json(row);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err));  
});


route.put("/:id", (req, res) => {
    validateUser.validateAsync(req.body).then(obj => {
        User.findOne({ where: { id: req.params.id }}).then(user =>{
            user.username = req.body.username;
            user.email = req.body.email;
            user.sifra = req.body.sifra
            user.admin = req.body.admin;
            user.moderator = req.body.moderator;
            user.save();
            res.json(user);
        }).catch(err => res.status(500).json(err));
    }).catch(err => res.status(500).json(err)); 
});


route.delete('/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id }}).then(user =>{
        user.destroy();
        res.json(user);
    }).catch(err => res.status(500).json(err));
});

module.exports = route;