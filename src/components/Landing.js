import React from "react";
import "../styles/Landing.css";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="general">
        <div className="container-fluid">
          <SearchBar />
          <div className="buttons">
            <div className="butt">
              <h1>Book your trains with us!</h1>
              <br />
              <button type="button" class="btn login btn-primary btn-md">
                <Link to="/login">LOGIN</Link>
              </button>

              <button type="button" class="btn signup btn-secondary btn-md">
                <Link to="/register">SIGN UP</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
