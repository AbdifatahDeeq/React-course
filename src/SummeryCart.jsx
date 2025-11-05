import { useContext } from "react";
import { CartContext } from "./CartContext";

const SummaryCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.length;

  return (
    <>
      <h1>Cart Summary ({totalItems})</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SummaryCart;
