import React, { Fragment, useContext, useEffect } from "react";
import Header from "../layout/header/Header";
import Storytelling from "../layout/story/Storytelling";
import MovieContext from '../../context/movie/movieContext';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const movieContext = useContext(MovieContext);
  const { resetNoResult } = movieContext;

  // the home page route reset the not-found result state
  useEffect(() => {
    resetNoResult();
    
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Header />
      <Storytelling />
    </Fragment>
  );
};

export default Home;
