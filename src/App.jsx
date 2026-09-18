import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieListing from './pages/MovieListing';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      const savedPage = localStorage.getItem('movieexplorer_current_page');
      return savedPage ? savedPage : 'home';
    } catch {
      return 'home';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('movieexplorer_current_page', currentPage);
    } catch (e) {
      console.warn('Failed to save page state to localStorage:', e);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* Top Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Router */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' ? (
          <Hero onExplore={() => setCurrentPage('movies')} />
        ) : (
          <MovieListing />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;