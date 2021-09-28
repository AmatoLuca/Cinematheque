import React, { useReducer } from 'react';
import searchContext from './searchContext';
import searchReducer from './searchReducer';
import { SET_OPEN } from '../../types';

const SearchState = (props) => {
  const initialState = {
    isOpen : false
  }

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const handleSearch = () => {
    dispatch({
      type: SET_OPEN,
      payload: !state.isOpen
    });
  }

  return (
    <searchContext.Provider
    value={{
      isOpen: state.isOpen,
      handleSearch
    }}>
      { props.children }
    </searchContext.Provider>
  );
}

export default SearchState;