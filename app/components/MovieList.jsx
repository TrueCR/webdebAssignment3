import React from 'react';

const MovieList = () => {
  const movies = require('@/app/data/movies.json');

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year})<br />
            <strong>Actors:</strong> {movie.actors ? movie.actors.join(', ') : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
