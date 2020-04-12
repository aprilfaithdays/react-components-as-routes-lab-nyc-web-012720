import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovies = () => {
    return movies.map( movie => {
      return (
        <div>
          <h3>Title: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          Genres: <ol>{renderGenres(movie.genres)}</ol>
        </div>
      )
    })
  }

  const renderGenres = genres => {
    return genres.map( genre => {
      return (
        <li> {genre}</li>
      )
    })
  }

  return (
    <div>
       <h1>Movies Page</h1>
       {renderMovies()}
    </div>
  );
};

export default Movies;