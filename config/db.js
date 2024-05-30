const { Sequelize } = require('sequelize');

// Nombre BD, usuario, clave
const sequelize = new Sequelize('movil-i', 'root', 'Anakin1975#$', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;