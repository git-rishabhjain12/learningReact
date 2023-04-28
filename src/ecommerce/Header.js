import React from "react";

function Header() {
  return (
    <header>
      <h1>Ecommerce</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">
              Cart <span className="count">0</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
