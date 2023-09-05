import React, { createContext, useState } from "react";
import { data } from "../data";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (order) => {
    console.log("removeitem");
    setCart(cart.toSpliced(order, 1));
  };
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
