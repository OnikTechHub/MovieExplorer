import React, { useState } from 'react';

const SAMPLE_MOVIES = [
  {
    id: 1,
    title: 'Interstellar',
    year: '2014',
    rating: '8.7',
    genre: 'Sci-Fi',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new habitable planet.'
  },
  {
    id: 2,
    title: 'Inception',
    year: '2010',
    rating: '8.8',
    genre: 'Action',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: '2008',
    rating: '9.0',
    genre: 'Action',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    description: 'When the menace known as the Joker wreaks havoc and chaos on Gotham City, Batman must accept one of the greatest psychological and physical tests.'
  },
  {
    id: 4,
    title: 'Avatar: The Way of Water',
    year: '2022',
    rating: '7.6',
    genre: 'Sci-Fi',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora once a familiar threat returns to finish what was previously started.'
  },
  {
    id: 5,
    title: 'Oppenheimer',
    year: '2023',
    rating: '8.9',
    genre: 'Drama',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&auto=format&fit=crop&q=80',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.'
  },
  {
    id: 6,
    title: 'Dune: Part Two',
    year: '2024',
    rating: '8.6',
    genre: 'Adventure',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=80',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.'
  }
];

const GENRES = ['All', 'Action', 'Sci-Fi', 'Drama', 'Adventure'];

const MovieList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredMovies = SAMPLE_MOVIES.filter((movie) => {
    const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          movie.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <section className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span className="text-amber-400">🎬</span> Explore Movie Library
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Browse our curated collection of critically acclaimed blockbusters and hidden gems.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
          />
          <svg
            className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Genre Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
        {GENRES.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
              selectedGenre === genre
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col group"
            >
              {/* Poster Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-400 font-bold text-xs px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                  <span>★</span> {movie.rating}
                </div>

                {/* Genre Tag */}
                <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-800">
                  {movie.genre}
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {movie.title}
                    </h3>
                    <span className="text-slate-400 text-xs font-mono">{movie.year}</span>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {movie.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <span>▶</span> Watch Details
                  </span>
                  <button className="text-xs text-slate-400 hover:text-white transition-colors">
                    Add to Watchlist +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl mb-4">
            🔍
          </div>
          <h3 className="text-lg font-bold text-white mb-1">No movies found</h3>
          <p className="text-slate-400 text-sm">
            Try adjusting your search query or selecting a different genre.
          </p>
        </div>
      )}
    </section>
  );
};

export default MovieList;
