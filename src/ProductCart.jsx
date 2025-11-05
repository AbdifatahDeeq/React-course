import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCart = ({ itemId, itemName, price }) => {
  const { addCart } = useContext(CartContext);

  const handleCart = () => {
    addCart({ id: itemId, name: itemName, price: price });
  };

  return (
    <div>
      <p>{itemName}</p>
      <p>Price: ${price}</p>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCart;
