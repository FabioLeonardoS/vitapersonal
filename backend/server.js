// Carrega as variáveis de ambiente PRIMEIRO
require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Importa o CORS
const helmet = require('helmet');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Conectar ao MySQL
connectDB();

const app = express();

// --- CONFIGURAÇÃO DE CORS ---
// Define de qual origem (URL) o backend aceitará requisições
const corsOptions = {
  origin: 'http://localhost:3002', // A porta do seu frontend
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); // Aplica a configuração
// ----------------------------

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API funcionando!');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Usa a porta 3001 que definimos no .env
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});