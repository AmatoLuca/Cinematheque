import {
  GET_MOVIE,
  NO_RESULT,
} from '../../types';

const MovieReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movieRequested: action.payload.results,
      };
    case NO_RESULT:
      return {
        ...state,
        noResults: action.payload,
      };
     default:
      return state;
  }
}

export default MovieReducer;