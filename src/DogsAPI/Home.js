import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dogapi.css";

function Home() {
  const [values, setValues] = useState([]);
  const [item, setItem] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then((result) => {
      // console.log(result.data.message);
      setValues(Object.keys(result.data.message));
      // setValues(Object.entries(result));
      // console.log(Object.keys(result))
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    return axios
      .get(`https://dog.ceo/api/breed/${item}/images/random`)
      .then((result) => {
        // console.log(result.data.message);
        setImages(result.data.message);
      });
  }

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${item}/images/random`)
      .then((result) => {
        // console.log(result.data.message);
        setImages(result.data.message);
      });
  }, [item]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <section>
        <header className="header">
          <img
            className="logo"
            src="https://dog.ceo/img/dog-api-logo.svg"
            alt="Logo"
          />
          <h1 className="heading">Dogs API</h1>
        </header>
        <section>
          <h1>Dog Breeds</h1>
          <form action="" onSubmit={handleSubmit}>
            <select value={item} onChange={handleChange}>
              <option value="">Select a breed</option>
              {values.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <button>Fetch</button>
          </form>
        </section>
        <section>
          <h1>{item.toUpperCase()}</h1>
          <img src={`${images}`} alt={`${item}`} />
        </section>
      </section>
    </>
  );
}

export default Home;
