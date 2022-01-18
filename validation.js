const Joi = require('@hapi/joi');


const validatePredmet = Joi.object({
    naaziv: Joi.string().min(1).required().required(),
    brojESPPoena: Joi.number().integer().min(3).required(),
    opis: Joi.string().min(3),
    prosecnaOcena: Joi.number().min(0)
});


const validateAsistent = Joi.object({
    ime: Joi.string().min(1).required(),
    prezime: Joi.string().min(1).required(),
    prosecnaOcena: Joi.number().min(0)
});

const validateProfesor = Joi.object({
    ime: Joi.string().min(1).required(),
    prezime: Joi.string().min(1).required(),
    zvanje: Joi.string().min(5).required(),
    prosecnaOcena: Joi.number().min(0)
});

const validateStudent = Joi.object({
    ime: Joi.string().min(1).required(),
    prezime: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    sifra: Joi.string().min(5).required(),
    indeks: Joi.string().min(1).required(),
    smer: Joi.string().min(1).required(),
    godina: Joi.number().integer().required(),
});

const validateUser = Joi.object({
    username:Joi.string().lowercase().required(),
    email: Joi.string().email().lowercase().required(),
    sifra: Joi.string().min(3).max(20).required(),
    admin: Joi.boolean().required(),
    moderator: Joi.boolean()
});

module.exports = {
    validatePredmet,
    validateAsistent,
    validateProfesor,
    validateStudent, 
    validateUser
}

