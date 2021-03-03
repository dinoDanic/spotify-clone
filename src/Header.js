import { Avatar } from "@material-ui/core";
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header({ spotify }) {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, " />
      </div>
      <div className="header__right">
        <Avatar src="" alt="DD" />
        <h4>username</h4>
      </div>
    </div>
  );
}

export default Header;
