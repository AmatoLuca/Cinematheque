import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';
import makeShortUsername from "../../../utils/makeShortUsername";


const UserTooltipAuth = ({ forwardedRef }) => {

  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  // In case the username is too long to be contained in
  // the pop-up slot.
  const userName = makeShortUsername(user.name);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
    setAlert('You are Logged out', 'void-field'); 
  }

  return (
    <div ref={forwardedRef} className="user-tooltip">
      <ul>
        <li className="link-profile">
          <Link to="/user-profile">
            <span className="link-profile__name">
              {user && userName}
            </span>
            <span className="link-profile__sub">View profile</span>
          </Link>
        </li>
        <li className="link-profile-option">
          <a href="" onClick={handleClick}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserTooltipAuth;
