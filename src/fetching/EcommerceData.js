// https://fakestoreapi.com/products

import React, { useState, useEffect } from "react";
import axios from "axios";

function EcommerceData() {
  const productsStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
    flexWrap: "wrap",
  };

  const productStyle = {
    width: "22%",
    height: "400px",
    margin: "2rem 1rem",
  };

  const imgStyle = {
    width: "100%",
    height: "70%",
  };

  const [products, setProducts] = useState([]);

  //This code is running infinite times

  // function getEcommerceData() {
  //   return axios.get("https://fakestoreapi.com/products").then((result) => {
  //     console.log(result.data);
  //     setProducts(result.data);
  //   });
  // }


  
  // To make it run exactly once, we use useEffect

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  function trimDescription(desc) {
    // return desc.length > 100 ? desc.slice(0, 100) + "..." : desc;

    if (desc.length > 100) {
      return desc.slice(0, 100) + "...";
    }
  }

  return (
    <>
      {/* <button onClick={getEcommerceData}>Get Ecommerce Data</button> */}
      <div className="products" style={productsStyle}>
        {products.map((product, index) => {
          return (
            <div className="product" key={index} style={productStyle}>
              <img src={product.image} alt={product.title} style={imgStyle} />
              <h3>{product.title}</h3>
              <p>{trimDescription(product.description)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EcommerceData;
