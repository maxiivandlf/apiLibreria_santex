const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Ticket = sequelize.define('Tickets', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  used: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  eventName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Ticket;
