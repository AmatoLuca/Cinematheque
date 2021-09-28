import React from "react";
import { Link } from "react-router-dom";
import UserIconAuth from "./UserIconAuth";
import SearchIcon from "./SearchIcon";

const NavLinksAuth = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/movies">Movies</Link>
      </li>
      <UserIconAuth />
      <SearchIcon />
    </ul>
  );
};

export default NavLinksAuth;
