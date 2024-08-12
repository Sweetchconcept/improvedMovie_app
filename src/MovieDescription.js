// MovieDescription.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${movie.trailerLink.split('v=')[1]}`}
        frameborder="0"
        allowfullscreen
      />
      <p>
        <Link to="/">Back to home page</Link>
      </p>
    </div>
  );
};

export default MovieDescription;