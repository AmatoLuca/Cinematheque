import React from "react";
import { DiMozilla } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiThemoviedatabase } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <span>Cinematheque</span>
          <span className="logo-sub" style={{ paddingLeft: "0.5rem" }}>
            Movie Database
          </span>
        </div>
        <div className="footer-links">
          <a href="https://developer.mozilla.org/en-US/">
            <DiMozilla />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it">
            <IoLogoJavascript />
          </a>
          <a href="https://nodejs.org/en/">
            <FaNode />
          </a>
          <a href="https://www.mongodb.com/">
            <DiMongodb />
          </a>
        </div>

        <div className="footer-links">
          <a href="https://www.themoviedb.org/">
            <SiThemoviedatabase />
          </a>
          <a href="https://reactjs.org/">
            <FaReact />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it">
            <DiCss3 />
          </a>
          <a href="https://dev.w3.org/html5/html-author/">
            <AiFillHtml5 />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
