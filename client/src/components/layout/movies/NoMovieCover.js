import React from "react";
import { Link } from "react-router-dom";

const NoMovieCover = ({ movie }) => {

  return (
    <Link to={`/movie-details/${movie.id}`}>
      <div
        className="poster"
        style={{
          position: "relative",
          width: "200px",
          backgroundColor: "#fff",
        }}
      >
        <img src="" alt="" />
        <div className="poster__no-cover-available">No cover</div>
      </div>
    </Link>
  );
};

export default NoMovieCover;
