import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const MovieListing = () => {
  const {
    filteredShows,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    genres,
    refetch
  } = useMovies();

  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <div className="flex-1 bg-slate-950 text-white min-h-screen py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>TVMaze Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Movie & Show <span className="text-amber-400">Explorer</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Discover, search, and explore thousands of television shows and movies from all genres.
            </p>
          </div>

          {/* Prominent Search Bar */}
          <div className="w-full md:w-96 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a movie..."
                className="w-full bg-slate-900/90 text-white placeholder-slate-500 text-sm sm:text-base px-5 py-3.5 pl-11 rounded-2xl border border-slate-700/80 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none transition-all shadow-xl backdrop-blur-md"
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 text-slate-400 hover:text-white bg-slate-800 p-1 rounded-full text-xs transition-colors cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Genre Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedGenre === genre
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-bold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Search Status / Count */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 -mt-2">
          <span>
            {searchQuery ? (
              <>Showing search results for <strong className="text-amber-400">"{searchQuery}"</strong> ({filteredShows.length} found)</>
            ) : (
              <>Showing {selectedGenre === 'All' ? 'all shows' : `${selectedGenre} shows`} ({filteredShows.length} titles)</>
            )}
          </span>
        </div>

        {/* Loading State: Skeleton Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 overflow-hidden animate-pulse flex flex-col justify-between gap-4"
              >
                <div className="h-64 sm:h-72 bg-slate-800/80 rounded-xl w-full" />
                <div className="h-5 bg-slate-800 rounded w-3/4" />
                <div className="flex justify-between gap-2">
                  <div className="h-4 bg-slate-800/60 rounded w-1/3" />
                  <div className="h-4 bg-slate-800/60 rounded w-1/3" />
                </div>
                <div className="h-10 bg-slate-800 rounded-xl w-full mt-2" />
              </div>
            ))}
          </div>
        ) : error ? (
          /* Error State */
          <div className="py-24 text-center flex flex-col items-center justify-center bg-slate-900/50 border border-red-500/20 rounded-3xl p-8">
            <div className="w-14 h-14 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-xl font-bold mb-4">
              !
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Unable to Load Movies</h3>
            <p className="text-slate-400 text-sm max-w-md mb-6">{error}</p>
            <button
              type="button"
              onClick={refetch}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : filteredShows.length > 0 ? (
          /* Movie Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredShows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSeeDetails={(selected) => setSelectedShow(selected)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-24 text-center flex flex-col items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8">
            <svg
              className="w-12 h-12 text-slate-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-bold text-white mb-2">No Movies Found</h3>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              We couldn't find any titles matching "{searchQuery}". Try searching with different keywords or selecting "All" genres.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('All');
              }}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Interactive Popup Modal */}
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />

      </div>
    </div>
  );
};

export default MovieListing;
