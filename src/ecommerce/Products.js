import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  function handleAddToCart(e, id) {
    e.preventDefault();
    setCart([...cart, products[id]]);
  }

  console.log(cart);

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
      <div className="products-container">
        <h2>Products</h2>
        <div className="products">
          {products.map((product, index) => {
            return (
              <div className="product" key={index}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                {/* <h3>{"$ " + product.price}</h3> */}
                <h3>
                  {existInCart(product.id) ? (
                    <a href="" className="addedToCart">
                      Added to cart
                    </a>
                  ) : (
                    <a
                      href=""
                      className="addToCart"
                      onClick={(e) => handleAddToCart(e, index)}
                   >
                      Add to Cart
                    </a>
                  )}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
