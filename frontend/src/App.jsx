import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-bold text-indigo-600">VITAPERSONAL</h1>
        <button className="text-sm text-indigo-600 font-medium">Entrar</button>
      </header>

      {/* Hero Section */}
      <section className="flex-1 px-5 pt-6 pb-20 overflow-y-auto">
        <h2 className="text-2xl font-extrabold leading-tight mb-4">
          Comece sua jornada hoje.
        </h2>
        <p className="text-gray-600 mb-8">
          Um plano personalizado para você perder gordura, ganhar músculos e se sentir bem — sem gastar muito.
        </p>

        <img
          src="https://picsum.photos/seed/vitapersonal/400/300" 
          alt="Homem fazendo treino em casa"
          className="w-full rounded-lg shadow-md mb-8"
        />

        <h3 className="text-lg font-semibold mb-4">Preencha seus dados:</h3>

        <form className="space-y-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Nome completo</label>
            <input
              type="text"
              placeholder="João Silva"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">WhatsApp</label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">E-mail</label>
            <input
              type="email"
              placeholder="joaosilva@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Idade</label>
            <input
              type="number"
              placeholder="25"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Altura (cm)</label>
            <input
              type="number"
              placeholder="175"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Peso atual (kg)</label>
            <input
              type="number"
              placeholder="80"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Cintura (cm)</label>
            <input
              type="number"
              placeholder="90"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">Objetivo</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300">
              <option>Emagrecer</option>
              <option>Ganhar Músculo</option>
              <option>Manter</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-indigo-700 transition"
          >
            Criar Conta
          </button>
        </form>
      </section>

      {/* Footer / Bottom Nav */}
      <footer className="bg-white border-t border-gray-200 px-4 py-2 flex justify-around text-sm text-gray-500 fixed bottom-0 left-0 w-full">
        <span>Início</span>
        <span>Dieta</span>
        <span>Treino</span>
        <span>Progresso</span>
      </footer>
    </div>
  );
}
