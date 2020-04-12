import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const renderDirectors = () => {
    return directors.map ((dtr, i) => {
      return (
        <div>
          <h3>Name: {dtr.name}</h3>
          Movies:
          <ol>
            {renderMovies(dtr.movies)}
          </ol>
        </div>
      )
    })
  }

  const renderMovies = movies => {
    return movies.map( movie => {
      return <li>{movie}</li>
    })
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
