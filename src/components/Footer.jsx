import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-xl font-bold tracking-wider flex items-center gap-1.5 text-white mb-1">
              <span className="font-extrabold">Movie</span>
              <span className="text-amber-400 font-extrabold">Explorer</span>
            </div>
            <p className="text-xs text-slate-500">
              Discover and explore your favorite movies anytime, anywhere.
            </p>
          </div>

          {/* Social / Helpful Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#github" 
              className="hover:text-amber-400 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              GitHub
            </a>
            <a 
              href="#twitter" 
              className="hover:text-amber-400 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Twitter
            </a>
            <a 
              href="#discord" 
              className="hover:text-amber-400 transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Discord
            </a>
          </div>

          {/* Copyright Info */}
          <div className="text-xs text-slate-500 text-center md:text-right">
            © 2026 MovieExplorer. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
