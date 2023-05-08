import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ecommerceContext } from "./First";

function Products() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(ecommerceContext);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cart));
  },[cart]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  function handleAddToCart(e, product) {
    console.log(product)
    e.preventDefault();
    setCart([...cart, product]);
  }
  console.log(cart)

  

  function existInCart(productID) {
    let exist = false;
    cart.forEach((c) => {
      if (c.id === productID) {
        exist = true;
      }
    });
    return exist;
  }

  return (
    <>
      <section className="products">
        <h2>Products</h2>
        <div className="products-container">
          {products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>
                  {existInCart(product.id) ? (
                    <a href="" className="addedToCart">
                      Added to cart
                    </a>
                  ) : (
                    <a
                      href=""
                      className="addToCart"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </a>
                  )}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Products;
