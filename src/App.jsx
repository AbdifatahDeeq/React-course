import React, { useState } from "react";
import CartContext from "./CartContext";
import SummaryCart from "./SummeryCart";
import ProductCart from "./ProductCart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>🛍️ My Shop</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ProductCart itemId={1} itemName="Widget" price={19.99} />
          <ProductCart itemId={2} itemName="Gadget" price={29.99} />
        </div>
        <SummaryCart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
