import React from "react";
import Row from "./Row";
import requests from "./requests";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <Row
        endpoint={requests.fetchNetflixOriginals}
        heading="Netflix Originals"
      />
      <Row endpoint={requests.fetchTrending} heading="Trending Movies" />
      <Row endpoint={requests.fetchTopRated} heading="Top Rated Moives" />
      <Row endpoint={requests.fetchActionMovies} heading="Action Movies" />
      <Row endpoint={requests.fetchComedyMovies} heading="Comedy Movies" />
      <Row endpoint={requests.fetchHorrorMovies} heading="Horror Movies" />
      <Row endpoint={requests.fetchRomanceMovies} heading="Romantic Movies" />
      <Row endpoint={requests.fetchDocumentaries} heading="Documentaries" />
    </>
  );
}

export default Homepage;