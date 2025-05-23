const express = require('express');
const app = express();
const PORT = 3000;

const { routesController } = require("./src/routes/routes.js");
const db = require('./src/models/index.js');
//routesController(app);

app.use(express.json());

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('--- Banco de dados sincronizado ---🚀');
    routesController(app);
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT} 🚀`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar com o banco de dados:', err);
  });
