const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Book = require('./book.model');

const Library = sequelize.define('Libraries', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;
