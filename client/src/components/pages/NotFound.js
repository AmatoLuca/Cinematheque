import React from "react";
import pageNotFound from "../../svg/undraw_page_not_found_su7k.svg";

const NotFound = () => {
  return (
    <div className="page-not-found" style={{ color: "#fff" }}>
      <div className="page-not-found__inner">
        <div className="page-not-found__image">
          <img src={pageNotFound} alt="" />
        </div>
        <h1 className="page-not-found__desc">
          There are no movies to show.
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
