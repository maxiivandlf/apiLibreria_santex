const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Book = sequelize.define('Books', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Book;
