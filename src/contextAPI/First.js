import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import "./ecommerce.css";
export const ecommerceContext = createContext({});

function First() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("products")) !== null
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );

  return (
    <>
      <ecommerceContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ecommerceContext.Provider>
    </>
  );
}

export default First;
