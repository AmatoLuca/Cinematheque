import React, { useState, useContext, useEffect } from "react";
import MovieContext from "../../../context/movie/movieContext";
import { useHistory } from "react-router-dom";
import AlertContext from '../../../context/alert/alertContext';


const SearchBar = () => {
  const history = useHistory();
  const movieContext = useContext(MovieContext);
  const { getMovie, movieRequested, noResults } = movieContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [movie, setMovie] = useState("");
  
  // Because of movieRequested is asyncronous,
  // before show the searched movie, useEffect 
  // will wait until the movieState is changed.
  useEffect(() => {
    if (movieRequested) {
      history.push('/movies');
      return;
    }

    // watch this piece of state
  }, [movieRequested]);

  useEffect(() => {
    if (noResults) {
      history.push('not-found');
      return;
    }  

  }, [noResults]);

  const handleMovie = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie === '') {
      setAlert('Please enter something ...', 'void-field');
      return;
    }

    getMovie(movie);
    setMovie('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="type a movie"
            value={movie}
            onChange={handleMovie}
          />
          <input type="submit" value="Search" />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
