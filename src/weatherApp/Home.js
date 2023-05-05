import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./weatherApp.css";

function Home() {
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const API_KEY = "0ef089c1671a0133a8bf1a3644977cfc";

  function handleSubmit(e) {
    e.preventDefault();
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`
      )
      .then((result) => {
        console.log(result.data);
        setWeatherData(result.data);
      });
  }

  function countryFlag() {
    return weatherData.sys.country.toLowerCase();
  }

  return (
    <>
      <header>
        <h1>Weather</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <h2>Weather App</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the city"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button type="submit">Get the Weather</button>
        </form>
        {weatherData ? (
          <div>
            <h1>
              {weatherData.name}{" "}
              <img
                src={`https://flagcdn.com/16x12/${countryFlag()}.png`}
                alt=""
              />
            </h1>
            <p>
              <strong>Temp:{weatherData.main.temp}</strong>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Home;
