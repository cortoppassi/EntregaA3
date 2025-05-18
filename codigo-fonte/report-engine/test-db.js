const sequelize = require('./config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco:', error);
  } finally {
    await sequelize.close();
  }
})();