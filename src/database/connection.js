const { Sequelize } = require('sequelize');

// Utiliza las variables de entorno proporcionadas por Railway
const sequelize = new Sequelize(process.env.RAILWAY_DATABASE_URL, {
  dialect: 'mysql',
  logging: false, // Puedes habilitar los registros si lo deseas
});

module.exports = sequelize;
