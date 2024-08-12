// MovieList.js
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const initialMovies = [
      // ...
    ];
    setMovies(initialMovies);
    setFilteredMovies(initialMovies);
  }, []);

  const handleFilter = (filter) => {
    const filtered = movies.filter((movie) => {
      if (filter.title) {
        return movie.title.toLowerCase().includes(filter.title.toLowerCase());
      }
      if (filter.rating) {
        return movie.rating >= filter.rating;
      }
      return true;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    if (!movies.find((movie) => movie.title === newMovie.title)) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...filteredMovies, newMovie]);
    }
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Filter onFilter={handleFilter} />
      <button onClick={() => handleAddMovie({ title: 'New Movie', description: 'New Desc', posterURL: 'https://example.com/new-poster.jpg', rating: 8, trailerLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })}>
        Add New Movie
      </button>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link to={`/movies/${movie.title}`} key={movie.title}>
            <MovieCard movie={movie} onClick={() => {}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;