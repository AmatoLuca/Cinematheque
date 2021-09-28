import React, { Fragment, useContext } from "react";
import SearchContext from "../../../context/search/searchContext";
import NavLinksAuth from "./NavLinksAuth";
import NavLinksGuest from "./NavLinksGuest";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AuthContext from '../../../context/auth/authContext';


const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;  

  const searchContext = useContext(SearchContext);
  const { isOpen } = searchContext;

  return (
    <Fragment>
      <nav>
        <div className="nav-bar">
          <Logo />
          {isAuthenticated ? <NavLinksAuth /> : <NavLinksGuest />}          
        </div>
      </nav>
      {isOpen && <SearchBar />}
    </Fragment>
  );
};

export default Navbar;
