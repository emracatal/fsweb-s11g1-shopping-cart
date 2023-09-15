import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductContextProvider } from "./contexts/ProductContext";
import { CartContextProvider } from "./contexts/CartContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </ProductContextProvider>
);

reportWebVitals();
