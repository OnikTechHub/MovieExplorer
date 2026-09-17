import React from 'react';

const Navbar = ({ setCurrentPage = () => {} }) => {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div 
          onClick={() => setCurrentPage('home')} 
          className="text-2xl font-bold tracking-wider flex items-center gap-2 cursor-pointer"
        >
          <span>🎬</span> <span className="text-amber-400">MovieExplorer</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('movies')}
            className="text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Movies
          </button>
        </nav>

        {/* CTA Button */}
        <div>
          <button 
            onClick={() => setCurrentPage('movies')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-4 py-2 rounded-lg shadow transition-all duration-200 cursor-pointer"
          >
            Explore Movies
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;