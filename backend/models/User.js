const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  whatsapp: { type: DataTypes.STRING },
  weight: { type: DataTypes.FLOAT },
  height: { type: DataTypes.FLOAT },
  age: { type: DataTypes.INTEGER },
  waist: { type: DataTypes.FLOAT },
  goal: { type: DataTypes.ENUM('Emagrecer', 'Ganhar Músculo', 'Manter'), defaultValue: 'Manter' },
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;