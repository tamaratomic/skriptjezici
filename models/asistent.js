'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asistent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Asistent.init({
    ime: DataTypes.STRING,
    prezime: DataTypes.STRING,
    prosecnaOcena: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Asistent',
  });
  return Asistent;
};