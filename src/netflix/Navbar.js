import React from "react";
import "./row.css";

function Navbar() {
  return (
    <div className="navBar">
      <h2>Netflix</h2>
      <div className="loginBtn">
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default Navbar;
