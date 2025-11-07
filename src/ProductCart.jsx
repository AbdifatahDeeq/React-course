import React, { useContext } from "react";
import CartContext from "./CartContext";

function ProductItem({ itemId, itemName, price }) {
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    const item = { id: itemId, name: itemName, price };
    addToCart(item);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px",
        padding: "10px",
        width: "200px",
      }}
    >
      <h3>{itemName}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
