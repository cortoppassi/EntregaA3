const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./src/models/index.js');

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('--- Banco de dados sincronizado ---🚀');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT} 🚀`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});
