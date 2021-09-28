import React from "react";
import { Link } from "react-router-dom";

const UserTooltipGuest = ({ forwardedRef }) => {

  return (
    // DOM's node referene for close tooltip clicking outside of it.
    <div ref={forwardedRef} className="user-tooltip">
      <ul>
        <li className="link-profile-option">
          <Link to="/register">Register</Link>
        </li>
        <li className="link-profile-option">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserTooltipGuest;
