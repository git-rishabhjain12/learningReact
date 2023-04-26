import React from "react";
import "./row.css";

function Navbar() {
  return (
    <header>
      <div cl assName="navBar">
        <h2>Netflix</h2>
        <div className="loginBtn">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
