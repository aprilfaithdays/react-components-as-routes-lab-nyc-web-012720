import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actorsList = () => {
    return actors.map( (actor, i) => {
      return (
        <div className="actor" key={i}> 
          <h3>Name: {actor.name}</h3>
          Movies:
          <ol>
            {movies(actor.movies)}
          </ol>
        </div>
      )
    })
  }

  const movies = movieList => {
    return movieList.map( (movie, i) => {
      return <li key={i}>{movie}</li>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList()}
    </div>
  );
};

export default Actors;
