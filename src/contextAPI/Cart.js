import React, { useContext } from "react";
import { ecommerceContext } from "./First";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(ecommerceContext);

  function handleDeleteFromCart(e, itemToDelete) {
    e.preventDefault();
    setCart(cart.filter((cartItem) => cartItem.id !== itemToDelete.id));
  }

  return (
    <section>
      <h1>Cart</h1>
      <div className="cart-list">
        {cart.map((item, index) => {
          return (
            <div className="cart-item" key={item.id}>
              <div className="left">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="right">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <Link to="#" onClick={(e) => handleDeleteFromCart(e, item)}>
                  Delete
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Cart;
