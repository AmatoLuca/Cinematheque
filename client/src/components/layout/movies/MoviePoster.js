import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const MoviePoster = ({ movie }) => {
  const { poster_path } = movie;

  return (
    <Link to={`/movie-details/${movie.id}`}>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt="poster-movie"
        />
      </div>
    </Link>
  );
};

MoviePoster.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MoviePoster;
