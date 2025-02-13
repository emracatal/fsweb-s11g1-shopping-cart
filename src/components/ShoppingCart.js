import React, { createContext, useState } from "react";
import { ScCartCheckout } from "./scParts";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

import Item from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  const { cart } = useContext(CartContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item, ind) => (
        <Item key={ind} order={ind} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
 