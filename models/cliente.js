const { DataTypes } = require('sequelize');
const sequelize = require ('../config/database');

const Cliente = sequelize.define('Cliente', {
 cliente_id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
 }, 
 nome: {
  type: DataTypes.STRING,
  allowNull: false,
 }, 
 email: {
  type: DataTypes.STRING,
  allowNull: false,
 },
});

module.exports = Cliente;
