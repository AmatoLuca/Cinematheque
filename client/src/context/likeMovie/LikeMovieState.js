import React, { useReducer } from 'react';
import axios from 'axios';
import likeMovieContext from './likeMovieContext';
import likeMovieReducer from './likeMovieReducer';
import { 
  SAVE_MOVIE,
} from '../../types';


const LikeMovieState = (props) => {
  const initialState = {
    // list from db ???
    favouritesList: null,
  };

  const [state, dispatch] = useReducer(likeMovieReducer, initialState);

  // Save movie into database
  const saveMovie = async (movie_id) => {
    
    try {
      const res = await axios.post("/api/list", { id: movie_id });
      dispatch({ 
        type: SAVE_MOVIE, 
        payload: res.data
      });
      console.log('Movie saved into db: ', res.data);

    } catch (error) {
      console.error(error);
    }
  };

  // Utility func to getlikedMoviesFromDB
  const getMovieFromAPI = async (id) => {
    // To fetch a movie and avoid the CORS policy
    // this func take off and add again x-auth-token headers.
    delete axios.defaults.headers.common['x-auth-token']; 
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
    axios.defaults.headers.common['x-auth-token'] = localStorage.token;
    return res.data;
  };

  // Get liked/saved movies from database
  const getlikedMoviesFromDB = async () => {
    try {
      const res = await axios.get("/api/list");
      const temp_list = await res.data.movieList;
      // Get asynchroniusly a movie (object data) fetching through tmdb API
      // and insert them into an array.
      const list = Promise.all(temp_list.map(async id => getMovieFromAPI(id)));
      return list;

    } catch (error) {
      console.error(error);
    }
  };

  const deleteMovie = async (movie_id) => {
    try {
      const res = await axios.delete(`/api/list/${movie_id}`);
      console.log(res.data);
      return res.data;

    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <likeMovieContext.Provider
    value={{
      favouritesList: state.favouritesList,
      saveMovie,
      getlikedMoviesFromDB,
      deleteMovie,
    }}
  >
    {props.children}
  </likeMovieContext.Provider>
  );

}

export default LikeMovieState;