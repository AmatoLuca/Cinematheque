import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BsHeartFill } from "react-icons/bs";
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
import LikeMovieContext from '../../../context/likeMovie/likeMovieContext';


const likeButton = ({ movie }) => {
  // movie is array of object so 
  // we properly pick the element.
  const mov =  movie[0];

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const likeMovieContext = useContext(LikeMovieContext);
  const { saveMovie } = likeMovieContext;


  const handleLike = (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      saveMovie(mov.id);
      setAlert("Movie saved", "void-field");

    } else {
      setAlert("Action denied. You need to be authenticated", "void-field");
    }
  };

  return (
    <div className="like-action">
      <a href="">
        <BsHeartFill onClick={handleLike} />
      </a>
    </div>
  );
};

likeButton.protoTypes = {
  movie: PropTypes.object.isRequired,
};

export default likeButton;
