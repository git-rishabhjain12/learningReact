import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
