import React, { createContext, useState } from "react";
import { data } from "../data";

export const CartContext = createContext();

export function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
