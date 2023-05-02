import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import BlogParent from "./BlogParent";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import Contact from "./Contact";
import NotFound from "./NotFound";

function Home() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogParent />}>
          <Route index element={<Blog />} />
          <Route path=":id" element={<SingleBlog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
