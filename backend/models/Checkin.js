const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

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

module.exports = Checkin;