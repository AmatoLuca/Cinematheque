import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">Cinematheque</a>
      <div
        className="logo-sub"
        style={{ color: "#fff", paddingLeft: "0.5rem" }}
      >
        Movie Database
      </div>
    </div>
  );
};

export default Logo;
