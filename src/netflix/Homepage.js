import React from "react";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
// import Navbar from "./Navbar";
import Header from "./Header";

function Homepage() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Banner />
      <Row
        endpoint={requests.fetchNetflixOriginals}
        heading="Netflix Originals"
        isBigger={true}
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
