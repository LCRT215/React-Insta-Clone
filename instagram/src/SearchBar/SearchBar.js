import React from "react";
import "./SearchBar.css";
import logo from "../img/logo.png";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="ig-img">
        <img src={logo} alt="logo" />
      </div>
      <p>Instagram</p>
      <input type="text" name="search" placeholder="search" />
      <i className="fa fa-user-circle" />
      <i className="far fa-heart" />
      <i className="fa fa-user-circle" />
    </div>
  );
};

export default SearchBar;
