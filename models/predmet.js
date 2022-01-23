'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Predmet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Asistent, Profesor}) {
      // define association here
      // this.belongsTo(Profesor, {foreignKey: profesorId, as: 'profesor' });
      // this.belongsTo(Asistent, {foreignKey: asistentdI, as: 'profesor' })
    }
  };
  Predmet.init({
    naaziv: DataTypes.STRING,
    brojESPPoena: DataTypes.INTEGER,
    opis: DataTypes.STRING,
    prosecnaOcena: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Predmet',
  });
  return Predmet;
};