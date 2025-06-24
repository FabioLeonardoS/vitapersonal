const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db').connectDB;
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

// Conectar ao MySQL
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Rotas
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});