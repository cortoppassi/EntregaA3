// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'loja',        // Nome do banco de dados
  process.env.DB_USER || 'admin',       // Usuário
  process.env.DB_PASSWORD || 'admin',   // Senha
  {
    host: process.env.DB_HOST || 'localhost', // Host do banco (vai usar 'db' no Docker)
    port: process.env.DB_PORT || 3306,        // Porta do MySQL
    dialect: 'mysql',                         // Dialeto do banco
    logging: false,                           // Desativa logs no console
  }
);

module.exports = sequelize;
