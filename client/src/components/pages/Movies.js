import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MovieContext from "../../context/movie/movieContext";
import MovieItem from "../layout/movies/MovieItem";

const Movies = () => {
  const history = useHistory();
  const movieContext = useContext(MovieContext);
  const { movieRequested, noResults } = movieContext;
  const [storedMovies, setMoviesStored] = useState([]);

  useEffect(() => {
    setMoviesStored([]);
    const storageMovies = JSON.parse(localStorage.getItem("searchedMovies"));
    setMoviesStored(storageMovies);
  }, [localStorage]);

  useEffect(() => {
    if (noResults) {
      history.push("not-found");
      return;
    }
  }, [noResults]);

  return (
    <div className="cards-wrapper card-grid">
      {!movieRequested && storedMovies
        ? storedMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        : movieRequested
        ? movieRequested.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))
        : history.push("/movies-empty")}
    </div>
  );
};

export default Movies;
