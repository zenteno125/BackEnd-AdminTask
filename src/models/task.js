const Sequelize = require('sequelize');
const db = require('../database/connection');

const Task = db.define('Task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.TEXT,
  },
  fechaUltimaModificacion: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: Sequelize.NOW,
  },
  completado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false, 
  },
  fechaEliminacion: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null,
  },
}, {
  paranoid: true,
  timestamps: false,
});

Task.sync();

module.exports = Task;
