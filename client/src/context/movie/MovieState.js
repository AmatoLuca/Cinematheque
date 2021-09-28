import React, { useReducer } from 'react';
import axios from 'axios';
import movieContext from './movieContext';
import movieReducer from './movieReducer';
import { 
  GET_MOVIE,
  NO_RESULT,
} from '../../types';

const MovieState = (props) => {
  const initialState = {
    // filled when the user get liked movie list from database
    likedMovies: [],          
    // filled when the user search movie from the app        
    movieRequested: null, 
    // query doesn't match any movie
    noResults: false,
  }

  const [state, dispatch] = useReducer(movieReducer, initialState);

  // FOR SEARCHING MOVIE
  const getMovie = async (userMovie) => {
    try {
      // Before every movie request delete token headers 
      // to prevent cors request and errors due it.
      delete axios.defaults.headers.common['x-auth-token'];

      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${userMovie}`);
    
      if (res.data.results.length === 0) {
        dispatch({ 
          type: NO_RESULT,
          payload: true
        });

        console.log(localStorage.token);
        axios.defaults.headers.common['x-auth-token'] = localStorage.token;
      }
      // dispatch movie to the state only when 
      // axios return at least one movie
      if (res.data.results.length !== 0) {
        localStorage.removeItem('searchedMovies');
        localStorage.setItem('searchedMovies', JSON.stringify(res.data.results));
      
        dispatch({ 
          type: NO_RESULT,  
          payload: false
        });

        dispatch({ 
          type: GET_MOVIE, 
          payload: res.data 
        });

        console.log(localStorage.token);
        axios.defaults.headers.common['x-auth-token'] = localStorage.token;
      }
      
    } catch (error) {
      console.error(error);
    } 
  }

  // RESET TO FALSE noResults state flag
  const resetNoResult = () => {
    dispatch({ 
      type: NO_RESULT,  
      payload: false
    });
  }

  return (
    <movieContext.Provider
    value={{
      likedMovies: state.movieList,
      movieRequested: state.movieRequested,
      noResults: state.noResults,
      getMovie,
      resetNoResult,
    }}>
      { props.children }
    </movieContext.Provider>
  );
}

export default MovieState;