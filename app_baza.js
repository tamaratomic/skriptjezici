const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const {sequelize} = require('./models');


const predmeti = require('./routes/predmet');
const asistenti = require('./routes/asistent');
const profesori = require('./routes/profesor');
const studenti = require('./routes/student');
const users = require('./routes/user');


const {validation} = require('./validation');

var corsOptions = {
    origin: 'http://127.0.0.1:8000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

app.use('/admin/predmet', predmeti);
app.use('/admin/profesor', profesori);
app.use('/admin/asistent', asistenti);
app.use('/admin/student', studenti);
app.use('/admin/user', users);


app.listen({ port: 8001 }, async () => {
    await sequelize.authenticate();
});