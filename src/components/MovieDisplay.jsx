import React from "react";

export function MovieDisplay({ movie, handleFavorite }) {
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt="movie.Title" />
        <h2> {movie.Year}</h2>
        <button onClick={handleFavorite}>Favorite</button>
      </>
    );
  };

  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;
