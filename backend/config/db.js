const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Desative os logs do SQL no console
  }
);

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