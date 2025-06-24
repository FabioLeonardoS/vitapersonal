const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { sequelize } = require('../config/db');
const db = require('../models');

exports.register = async (req, res) => {
  const { name, email, password, whatsapp } = req.body;

  if (!name || !email || !password || !whatsapp) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'E-mail já cadastrado.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
      name,
      email,
      password: hashedPassword,
      whatsapp,
      weight: req.body.weight || null,
      height: req.body.height || null,
      age: req.body.age || null,
      waist: req.body.waist || null,
      goal: req.body.goal || 'Manter'
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor.', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await db.User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Credenciais inválidas.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta.' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor.', error: err.message });
  }
};