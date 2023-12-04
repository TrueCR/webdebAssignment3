'use client'
import React, { useState } from 'react';
import MovieForm from './MovieForm';

const MovieList = () => {
  const [movies, setMovies] = useState(require('@/app/data/movies.json'));
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleEdit = (movie) => {
    setEditData(movie);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleSave = (formData) => {
    if (isAdding) {
      setMovies([...movies, { id: Date.now(), ...formData }]);
    } else if (isEditing && editData) {
      const updatedMovies = movies.map((movie) =>
        movie.id === editData.id ? { ...movie, ...formData } : movie
      );
      setMovies(updatedMovies);
      setEditData(null);
      setIsEditing(false);
    }

    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditData(null);
  };

  return (
    <div>
      <h1>Movie List</h1>
      {isAdding || isEditing ? (
        <MovieForm onSave={handleSave} onCancel={handleCancel} initialData={editData} />
      ) : (
        <div>
          <button onClick={handleAdd}>Add Movie</button>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <strong>{movie.title}</strong> ({movie.year})<br />
                <strong>Actors:</strong> {movie.actors.join(', ')}<br />
                <button onClick={() => handleEdit(movie)}>Edit</button>{' '}
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieList;
