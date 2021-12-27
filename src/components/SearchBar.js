import React from "react";
import "../styles/SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <>
      <div className="search-form align-middle">
        <div className="form-input">
          <label htmlFor="location">From</label>
          <input className="input" type="text" />
        </div>
        <i class="fas fa-exchange-alt d-flex align-self-center"></i>
        <div className="form-input">
          <label htmlFor="destination">To</label>
          <input className="input" type="text" />
        </div>
        <div className="form-input">
          <label htmlFor="date">Departure Date</label>
          <input className="input" type="date" />
        </div>
        <button className="search-btn d-flex align-self-center">
          <Link to="/listing">
            Search <i class="fas fa-search"></i>
          </Link>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
