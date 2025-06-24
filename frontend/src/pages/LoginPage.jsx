import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <section className="flex-1 px-5 pt-6 pb-20 overflow-y-auto">
      <h2 className="text-2xl font-extrabold leading-tight mb-4">
        Login
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">E-mail</label>
          <input type="email" placeholder="seuemail@exemplo.com" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <div>
          <label className="block text-xs text-gray-500 mb-1">Senha</label>
          <input type="password" placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3" required />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-indigo-700 transition">
          Entrar
        </button>
      </form>
      <p className="text-center mt-4 text-sm">
        Não tem uma conta?{' '}
        <Link to="/register" className="font-medium text-indigo-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </section>
  );
}