import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import SearchContext from "../../../context/search/searchContext";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";


const SearchIcon = () => {
  const searchContext = useContext(SearchContext);
  const { isOpen, handleSearch } = searchContext;

  return (
    <li>
      <Link to="#" onClick={handleSearch}>
        {isOpen ? (
          <CgClose
            style={{ fontSize: "1.3rem", transform: "translateY(15%)" }}
          />
        ) : (
          <FiSearch
            style={{ fontSize: "1.3rem", transform: "translateY(15%)" }}
          />
        )}
      </Link>
    </li>
  );
};

export default SearchIcon;
