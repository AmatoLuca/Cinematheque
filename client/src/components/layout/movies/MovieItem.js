import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from './MoviePoster';
import NoMovieCover from './NoMovieCover';


const MovieItem = ({movie}) => {
  const { poster_path } = movie;

  return (
    // Some movies doesn't have poster.   
    // If it's the case, some in-line style 
    // fix the poster card appearance
    <div className="card-movie">
      {poster_path ? (
        <MoviePoster movie={movie} />
      ) : (
        <NoMovieCover movie={movie} />
      )}
    </div>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieItem;

