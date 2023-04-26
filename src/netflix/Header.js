import React, { useState } from "react";
import logo from "./images/netflix-logo.png";
import emoji from "./images/green-blue-emoji.png";
import "./header.css";

function Header() {
  const [isDark, setIsDark] = useState(false);

  window.onscroll = () => {
    setIsDark(window.scrollY > 150 ? true : false);
  };

  return (
    <header className={isDark ? "dark" : ""}>
      <div className="left">
        <img src={logo} alt="Netflix" />
      </div>
      <div className="right">
        <img src={emoji} alt="Emoji" />
      </div>
    </header>
  );
}

export default Header;
