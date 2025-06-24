const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Correção aqui
const { generateToken } = require('../utils/jwtUtils'); // Usando nossa função

exports.register = async (req, res) => {
  const { name, email, password, whatsapp, weight, height, age, waist, goal } = req.body;

  if (!name || !email || !password || !whatsapp) {
    return res.status(400).json({ message: 'Os campos nome, email, senha e whatsapp são obrigatórios.' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'E-mail já cadastrado.' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name, email, password: hashedPassword, whatsapp, weight, height, age, waist, goal
    });

    const token = generateToken(newUser.id); // Usando nossa função
    res.status(201).json({ token, user: { id: newUser.id, name: newUser.name } });

  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor.', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Credenciais inválidas.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta.' });

    const token = generateToken(user.id); // Usando nossa função
    res.json({ token, user: { id: user.id, name: user.name } });

  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor.', error: err.message });
  }
};