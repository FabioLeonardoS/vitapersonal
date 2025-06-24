const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User'); // Importante adicionar esta linha

const Checkin = sequelize.define('Checkin', {
  weight: { type: DataTypes.FLOAT },
  waist: { type: DataTypes.FLOAT },
  energy: { type: DataTypes.INTEGER },
  hunger: { type: DataTypes.INTEGER },
  adherence: { type: DataTypes.INTEGER },
}, {
  tableName: 'checkins',
  timestamps: true
});

// --- ADICIONE ESTAS LINHAS ABAIXO ---
// Define a associação: um Checkin pertence a um User
User.hasMany(Checkin, { foreignKey: 'userId' });
Checkin.belongsTo(User, { foreignKey: 'userId' });
// ------------------------------------

module.exports = Checkin;