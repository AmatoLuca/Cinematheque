import React from "react";
import { Link } from "react-router-dom";
import UserIconGuest from "./UserIconGuest";
import SearchIcon from "./SearchIcon";

const NavLinksDefault = () => {
  return (
    <div>
      <ul className="nav-links">
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <UserIconGuest />
        <SearchIcon />
      </ul>
    </div>
  );
};

export default NavLinksDefault;
