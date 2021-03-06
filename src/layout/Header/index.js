import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BackButton } from "../../components";

function Header() {
  return (
    <nav>
      <BackButton />
      <NavLink exact to="/" activeClassName="current">
        Home
      </NavLink>
      <NavLink exact to="/albums" activeClassName="current">
        Albums
      </NavLink>
      <NavLink to="/lyrics" activeClassName="current">
        Lyrics
      </NavLink>
      <NavLink to="/photos" activeClassName="current">
        Photos
      </NavLink>
      <NavLink to="/bio" activeClassName="current">
        Bio
      </NavLink>
      <NavLink to="/quiz" activeClassName="current">
        Quiz
      </NavLink>
    </nav>
  );
}

export default Header;
