const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
   host: process.env.DB_HOST || 'localhost', // Host do banco (vai usar 'db' no Docker)
    // port: process.env.DB_PORT || 3306,        // Porta do MySQL
    // dialect: 'mysql',                         // Dialeto do banco
    // logging: false,                           // Desativa logs no console

    host: '127.0.0.1', // ou 'localhost'
    port: 3306,
    dialect: 'mysql',
    logging: false, // opcional
  }
);

module.exports = sequelize;
