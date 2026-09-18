import { useState, useEffect, useCallback, useMemo } from 'react';

export const POPULAR_GENRES = [
  'All',
  'Action',
  'Drama',
  'Science-Fiction',
  'Comedy',
  'Thriller',
  'Crime',
  'Romance',
  'Adventure'
];

export const useMovies = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  // Fetch default shows from TVMaze API
  const fetchDefaultShows = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.tvmaze.com/shows');
      if (!response.ok) {
        throw new Error(`Failed to fetch shows (Status: ${response.status})`);
      }
      const data = await response.json();
      setShows(data);
    } catch (err) {
      console.error('Error fetching shows:', err);
      setError(err.message || 'Something went wrong while loading movies.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Search shows from TVMaze API
  const searchShows = useCallback(async (query) => {
    if (!query.trim()) {
      fetchDefaultShows();
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error(`Search failed (Status: ${response.status})`);
      }
      const data = await response.json();
      // Normalize TVMaze search response which returns [{ score, show }]
      const normalized = data.map((item) => item.show).filter(Boolean);
      setShows(normalized);
    } catch (err) {
      console.error('Error searching shows:', err);
      setError(err.message || 'Something went wrong while searching.');
    } finally {
      setLoading(false);
    }
  }, [fetchDefaultShows]);

  // Initial load
  useEffect(() => {
    fetchDefaultShows();
  }, [fetchDefaultShows]);

  // Debounced search when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim()) {
        searchShows(searchQuery);
      } else {
        fetchDefaultShows();
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchQuery, searchShows, fetchDefaultShows]);

  // Filter shows by genre
  const filteredShows = useMemo(() => {
    return shows.filter((show) => {
      if (selectedGenre === 'All') return true;
      return show.genres && show.genres.includes(selectedGenre);
    });
  }, [shows, selectedGenre]);

  return {
    shows,
    filteredShows,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    genres: POPULAR_GENRES,
    refetch: fetchDefaultShows
  };
};

export default useMovies;
