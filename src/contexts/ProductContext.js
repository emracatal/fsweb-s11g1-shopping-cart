import React, { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const [products, setProducts] = useState(data);
  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
