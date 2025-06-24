import React, { useState } from 'react';
import axios from 'axios';

// A URL completa do seu backend local
const API_URL = 'http://localhost:3001';

export default function App() {
  const [formData, setFormData] = useState({
    name: '', whatsapp: '', email: '', password: '',
    age: '', height: '', weight: '', waist: '', goal: 'Emagrecer',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      // Agora usamos a URL completa do backend
      await axios.post(`${API_URL}/api/auth/register`, formData);
      setMessage('Cadastro realizado com sucesso! Redirecionando para o login...');

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ocorreu um erro.';
      setMessage(`Erro no cadastro: ${errorMessage}`);
    }
  };

  return (
    // O resto do seu JSX continua exatamente o mesmo...
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* ... (cole o resto do seu código JSX aqui) ... */}
    </div>
  );
}