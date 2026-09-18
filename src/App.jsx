import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Home Page Content: Strictly Hero Banner */}
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;