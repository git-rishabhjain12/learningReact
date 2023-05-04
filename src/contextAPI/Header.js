import React from "react";
import { Link } from "react-router-dom";
import { ecommerceContext } from "./First";
import { useContext } from "react";
function Header() {
  const { cart } = useContext(ecommerceContext);
  return (
    <header>
      <h1>Ecommerce</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">
              Cart <span className="count">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
