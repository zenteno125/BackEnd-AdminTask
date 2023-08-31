<<<<<<< HEAD
const { Sequelize } = require('sequelize');

// Utiliza las variables de entorno proporcionadas por Railway
const sequelize = new Sequelize(process.env.RAILWAY_DATABASE_URL, {
  dialect: 'mysql',
  logging: false, // Puedes habilitar los registros si lo deseas
});

module.exports = sequelize;
=======
const { Sequelize } = require('sequelize');

// Utiliza las variables de entorno proporcionadas por Railway
const sequelize = new Sequelize(process.env.RAILWAY_DATABASE_URL, {
  dialect: 'mysql',
  logging: false, // Puedes habilitar los registros si lo deseas
});

module.exports = sequelize;
>>>>>>> 1383875674f1d94783b2cb65fa3aac2332553bb5
