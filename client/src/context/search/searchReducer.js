import { SET_OPEN } from '../../types';

const searchReducer = (state, action) => {
  switch (action.type) {
    case SET_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;  
  }
};

export default searchReducer;