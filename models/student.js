'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    email: DataTypes.STRING,
    sifra: DataTypes.STRING,
    indeks: DataTypes.STRING,
    smer: DataTypes.STRING,
    godina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};