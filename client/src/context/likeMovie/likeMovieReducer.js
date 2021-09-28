import {
  SAVE_MOVIE,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SAVE_MOVIE:
      return {
        ...state,
        favouritesList: action.payload.list
      };
    default:
      return state;
  }
};
