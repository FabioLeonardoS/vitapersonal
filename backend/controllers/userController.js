const { sequelize } = require('../config/db');
const User = require('../models/User');
const Checkin = require('../models/Checkin');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [Checkin]
    });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuário', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
      returning: true
    });

    if (!updated) return res.status(404).json({ message: 'Usuário não encontrado' });
    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
  }
};

exports.addCheckin = async (req, res) => {
  try {
    const checkin = await Checkin.create({
      ...req.body,
      userId: req.params.id
    });
    res.status(201).json(checkin);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao adicionar check-in', error: err.message });
  }
};