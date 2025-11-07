import React, { useContext } from "react";
import CartContext from "./CartContext";

function SummaryCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div
      style={{
        marginTop: "30px",
        borderTop: "2px solid #000",
        paddingTop: "10px",
      }}
    >
      <h2>🛒 Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <h3>
          Total: $
          {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </h3>
      )}
    </div>
  );
}

export default SummaryCart;
