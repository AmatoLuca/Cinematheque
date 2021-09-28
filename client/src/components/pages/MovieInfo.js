import React, { useState } from "react";
import { useParams } from "react-router";
import { GiOrange } from "react-icons/gi";
import LikeButton from "../layout/like-button/LikeButton";


const MovieInfo = () => {
  const { id } = useParams();

  // transform id in numnber to match id movie correctly.
  const castedID = Number(id);

  // keep in the state component a copy of localStorage list.
  const [list] = useState([
    ...JSON.parse(localStorage.getItem("searchedMovies")),
  ]);

  // find the movie clicked based on its ID
  const movieSelected = list.filter((movie) => {
    return movie.id === castedID;
  });

  // destructuring the movie from the array
  const { title, poster_path, vote_average, overview, release_date } =
    movieSelected[0];

  return (
    <div className="movie-container">
      <div className="movie-details">
        <div className="movie-details__poster">
          <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
        </div>
        <div className="movie-info-wrapper">
          <div className="movie-details_title">{title}</div>
          <div className="movie-details_average">
            <GiOrange />
            {vote_average}
          </div>
          <div className="movie-details_plot">{overview}</div>
          <div className="plus-details">
            <div className="movie-details_release">{release_date}</div>

              <LikeButton movie={movieSelected} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
