import React, { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Main Content Placeholder Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-amber-400 mb-3">
            Welcome to MovieExplorer
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Currently viewing: <span className="text-white font-semibold capitalize">{currentPage}</span> page.
          </p>
          <div className="inline-block px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-xs font-mono border border-slate-700">
            Movie content coming soon...
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;