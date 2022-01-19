const express = require('express');
const { sequelize, User } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { use } = require('bcrypt/promises');
require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://127.0.0.1:8000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

/*
app.post('/register', (req, res) => {

    const obj = {
        name: req.body.name,
        email: req.body.email,
        admin: req.body.admin,
        password: bcrypt.hashSync(req.body.password, 10)
    };

    Users.create(obj).then( rows => {
        
        const usr = {
            userId: rows.id,
            user: rows.name
        };

        const token = jwt.sign(usr, process.env.ACCESS_TOKEN_SECRET);

        console.log(token);
        
        res.json({ token: token });

    }).catch( err => res.status(500).json(err) );
});*/

app.post('/login', (req, res) => {
    console.log("Logujem se " + req.body.email);
    User.findOne({ where: { email: req.body.email } })
        .then( user => {
            console.log("u useru");

            if (bcrypt.compareSync(req.body.sifra, user.sifra)) {
                const obj = {
                    userId: user.id,
                    username: user.username,
                    email: user.email,
                    sifra: user.sifra,
                    admin: user.admin,
                    moderator: user.moderator
                };
                console.log(obj);
                const token = jwt.sign(obj, process.env.ACCESS_TOKEN_SECRET);
                
                res.json({ token: token });
            } else {
                res.status(400).json({ msg: "Invalid credentials"});
            }
        })
        .catch( err => res.status(500).json(err) );
});

app.listen({ port: 9000 }, async () => {
    await sequelize.authenticate();
});