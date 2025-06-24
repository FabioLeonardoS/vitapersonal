import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa o hook para navegação

export default function RegisterPage() {
  const navigate = useNavigate(); // Inicializa o hook de navegação
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
      // Para o teste local, usamos o caminho relativo para o proxy do Vite
      await axios.post('/api/auth/register', formData);
      setMessage('Cadastro realizado com sucesso! Redirecionando para o login...');

      // Após 2 segundos, redireciona o usuário para a página de login
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ocorreu um erro.';
      setMessage(`Erro no cadastro: ${errorMessage}`);
    }
  };

  return (
    <section className="flex-1 px-5 pt-6 pb-20 overflow-y-auto">
      <h2 className="text-2xl font-extrabold leading-tight mb-4">Comece sua jornada hoje.</h2>
      <p className="text-gray-600 mb-8">Um plano personalizado para você.</p>
      <h3 className="text-lg font-semibold mb-4">Preencha seus dados:</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* O formulário continua o mesmo... */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Nome completo</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu Nome Completo" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">WhatsApp</label>
          <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="(11) 99999-9999" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">E-mail</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seuemail@exemplo.com" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Senha</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Idade</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="25" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Altura (cm)</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="175" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Peso atual (kg)</label>
          <input type="number" step="0.1" name="weight" value={formData.weight} onChange={handleChange} placeholder="80.5" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Cintura (cm)</label>
          <input type="number" step="0.1" name="waist" value={formData.waist} onChange={handleChange} placeholder="90" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Objetivo</label>
          <select name="goal" value={formData.goal} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3">
            <option value="Emagrecer">Emagrecer</option>
            <option value="Ganhar Músculo">Ganhar Músculo</option>
            <option value="Manter">Manter</option>
          </select>
        </div>
        {message && <p className="text-center text-sm font-medium text-blue-600 p-2 bg-blue-100 rounded-lg">{message}</p>}
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-indigo-700 transition">Criar Conta</button>
      </form>
    </section>
  );
}