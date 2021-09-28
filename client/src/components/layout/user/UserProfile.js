import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserProfileStandbyLogo from "./UserProfileStandbyLogo";
import AuthContext from "../../../context/auth/authContext";
import dateSubscriptionFormatter from "../../../utils/dateSubscriptionFormatter";
import Movies from "../../pages/Movies";
import MovieInfo from "../../pages/MovieInfo";
import UserList from "./UserList";

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;

  let subscriptionDate;
  // Get the user registration date
  if (isAuthenticated) {
    subscriptionDate = dateSubscriptionFormatter(user.date).join(" ");
  }

  return (
    <Router>
      <div className="user-home">
        <header className="user-hero">
          <div className="user-hero__info-box">
            <h3 className="user-hero__nickname">{user && user.name}</h3>
            <p className="user-hero__subscription-date">
              Member since {user && subscriptionDate ? subscriptionDate : ""}
            </p>
          </div>

          <ul className="user-home__nav-links">
            <li>
              <Link to="your-list">Your Lists</Link>
            </li>
            <li>
              <Link to="/movies">Last Searched</Link>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </header>

        <div className="user-home-main">
          <Switch>
            <Route exact path="/user-profile" component={UserProfileStandbyLogo} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movie-details/:id" component={MovieInfo} />
            <Route exact path="/your-list" component={UserList} />
          </Switch>
        </div>
      </div> 
    </Router>
  );
};

export default UserProfile;
