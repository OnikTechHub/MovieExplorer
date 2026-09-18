import React from 'react';

const MovieCard = ({ show, onSeeDetails }) => {
  if (!show) return null;

  const title = show.name || show.title || 'Untitled Show';
  const poster = show.image?.medium || show.image?.original || null;
  const year = show.premiered ? show.premiered.slice(0, 4) : 'N/A';
  const rating = show.rating?.average ? show.rating.average : 'N/A';

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1">
      {/* 1. Poster image at the top with clean fixed height & object-cover */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
        {poster ? (
          <img
            src={poster}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-slate-500 text-center">
            <svg
              className="w-10 h-10 text-slate-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
            <span className="text-xs font-medium">No Poster Available</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          {/* 2. Movie Title (bold, truncated if too long) */}
          <h3
            title={title}
            className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors truncate mb-2.5"
          >
            {title}
          </h3>

          {/* 3. Rating & Release Year cleanly aligned side-by-side without emojis */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-slate-300 font-medium">
            <span className="text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              Rating: {rating}
            </span>
            <span className="text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60 font-mono text-xs">
              Year: {year}
            </span>
          </div>
        </div>

        {/* 4. Prominent "See Details" button at the bottom */}
        <button
          type="button"
          onClick={() => onSeeDetails && onSeeDetails(show)}
          className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <span>See Details</span>
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
