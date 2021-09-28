import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchState from "./context/search/SearchState";
import MovieState from "./context/movie/MovieState";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/footer/Footer";
import Movies from "./components/pages/Movies";
import MoviesEmpty from "./components/pages/MoviesEmpty";
import NotFound from "./components/pages/NotFound";
import AlertState from "./context/alert/AlertState";
import Alert from "./components/layout/alert/Alert";
import MovieInfo from "./components/pages/MovieInfo";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import UserProfile from "./components/layout/user/UserProfile";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
import LikeMovieState from "./context/likeMovie/LikeMovieState";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <SearchState>
        <MovieState>
          <LikeMovieState>
            <AlertState>
              <Router>
                <Fragment>
                  <Navbar />
                  <div className="app-container">
                    <Alert />
                    <Switch>
                      <Route exact path="/movies" component={Movies} />
                      <Route exact path="/movies-empty" component={MoviesEmpty} />
                      <Route exact path="/not-found" component={NotFound} />
                      <Route exact path="/movie-details/:id" component={MovieInfo} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/user-profile" component={UserProfile} />
                      <Route path="/" component={Home} />
                    </Switch>
                  </div>
                  <Footer />
                </Fragment>
              </Router>
            </AlertState>
          </LikeMovieState>
        </MovieState>
      </SearchState>
    </AuthState>
  );
}

export default App;
