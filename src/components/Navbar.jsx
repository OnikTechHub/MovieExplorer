import React from 'react';

const Navbar = ({ currentPage = 'home', setCurrentPage = () => {} }) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div 
          onClick={() => setCurrentPage('home')} 
          className="text-xl sm:text-2xl font-bold tracking-wider flex items-center gap-2 cursor-pointer select-none hover:opacity-90 transition-opacity"
        >
          <span>🎬</span> <span className="text-amber-400">MovieExplorer</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 sm:gap-6 font-medium text-sm sm:text-base">
          <button 
            type="button"
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentPage === 'home'
                ? 'text-amber-400 bg-slate-800 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Home
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('movies')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              currentPage === 'movies'
                ? 'text-amber-400 bg-slate-800 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Movies
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button 
            type="button"
            onClick={() => setCurrentPage('movies')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 rounded-lg shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer active:scale-95"
          >
            Explore Movies
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;