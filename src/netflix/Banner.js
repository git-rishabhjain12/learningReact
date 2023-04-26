import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const img_full_path = "https://image.tmdb.org/t/p/original";
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get(requests.fetchNetflixOriginals).then((result) => {
      setBanner(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    });
  }, []);

  console.log(banner);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: "url(" + img_full_path + banner.backdrop_path + ")",
      }}
    >
      <div className="banner-container">
        <h1>{banner.title || banner.orginal_name || banner.name}</h1>
        <a href="" className="playBtn">
          Play
        </a>
        <a href="" className="mylistBtn">
          My List
        </a>
        <p>{banner.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
