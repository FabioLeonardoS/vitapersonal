const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'fabio',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'appvitapersonal',
  logging: false // Desative logs SQL durante o desenvolvimento
});


const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };