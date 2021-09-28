import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import LikeMovieContext from '../../../context/likeMovie/likeMovieContext';


const DeleteMovieButton = ({ movieId, list, setList }) => {
  const likeMovieContext = useContext(LikeMovieContext);
  const { deleteMovie } = likeMovieContext;

  // Remove a movie
  const handleDeleteMovie = async (e) => {

    e.preventDefault();
    // Wait the db's delete action
    await deleteMovie(movieId);
    // Manipulate the father's component list 
    setList(list.filter(movie => {
      return movie.id !== movieId;
    }));

  };

  return (
    <AiFillCloseCircle 
      className="delete-movie-button" 
      onClick={handleDeleteMovie}
    />
  );
}

DeleteMovieButton.propTypes = {
  movieId: PropTypes.number.isRequired,
}

export default DeleteMovieButton;
