import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onExplore = () => {} }) => {
  return (
    <section className="relative flex-1 min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Background Banner Image - Vibrant & Crystal Clear */}
      <motion.div 
        initial={{ scale: 1.04, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/8nwgfkn2/Image-Sep-18-2026-05-32-54-PM.png')`
        }}
      />

      {/* Ultra-Light Transparent Overlay to Preserve Full Banner Brightness and Clarity */}
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/30 pointer-events-none" />

      {/* Hero Content Container with Framer Motion Staggered Animations */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/75 border border-amber-400/60 text-amber-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-2xl backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400" />
          <span>Cinematic Experience</span>
        </motion.div>

        {/* Large Prominent Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          DISCOVER <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">MOVIES</span>
        </motion.h1>

        {/* Sleek Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-slate-100 max-w-3xl mb-10 leading-relaxed font-semibold drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
        >
          Explore and discover your favorite movies from around the world.
        </motion.p>

        {/* Call To Action (CTA) Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            type="button"
            onClick={onExplore}
            className="group relative inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-lg sm:text-xl px-10 py-4.5 rounded-2xl shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>Explore Now</span>
            <svg 
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

        {/* Clean Glassmorphic Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-white/20 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center bg-slate-950/60 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
            <span className="text-amber-400 text-xl sm:text-3xl font-black drop-shadow">10,000+</span>
            <span className="text-slate-200 text-xs sm:text-sm font-semibold mt-1">Movies & Shows</span>
          </div>
          <div className="flex flex-col items-center bg-slate-950/60 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
            <span className="text-amber-400 text-xl sm:text-3xl font-black drop-shadow">4K Ultra HD</span>
            <span className="text-slate-200 text-xs sm:text-sm font-semibold mt-1">High Quality</span>
          </div>
          <div className="flex flex-col items-center bg-slate-950/60 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl border border-white/10 shadow-2xl">
            <span className="text-amber-400 text-xl sm:text-3xl font-black drop-shadow">Daily</span>
            <span className="text-slate-200 text-xs sm:text-sm font-semibold mt-1">Updates</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
