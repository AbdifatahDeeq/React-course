import { useState, useEffect} from "react";


const ShoppingCart = () => {
   const [title] = useState("SS-CART");
  useEffect(() => {
    document.title = title;
  }, [title]); // <-- add dependency

const [products, setProducts] = useState([]);
const [productName, setProductName] = useState("");
const [productPrice, setProductPrice] = useState("");

const addProduct = () => {
if (!productName.trim() || !productPrice.trim()) return;

const newProduct = {
id: Date.now(),
name: productName.trim(),
price: parseFloat(productPrice),
quantity: 1,
};

setProducts([...products, newProduct]);
setProductName("");
setProductPrice("");
};

const decreaseQuantity = (id) => {
const updatedProducts = products.map((item) =>
item.id === id && item.quantity > 1
? { ...item, quantity: item.quantity - 1 }
: item
);
setProducts(updatedProducts);
};

const increaseQuantity = (id) => {
const updatedProducts = products.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
);
setProducts(updatedProducts);
};

const removeProduct = (id) => {
setProducts(products.filter((product) => product.id !== id));
};

return (
<div
style={{
backgroundColor: "#f0f8ff",
padding: "20px",
maxWidth: "500px",
margin: "0 auto",
borderRadius: "10px",
alignItems: "center",
}}
>
<h1 style={{ textAlign: "center", color: "#333" }}>
Simple Shopping Cart
</h1>
<h3 style={{ textAlign: "center", color: "#555" }}>Add a Product</h3>

<div
style={{
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#e6f2ff",
  borderRadius: "5px",
  margin: "10px",
}}
>
<input
  onChange={(e) => setProductName(e.target.value)}
  value={productName}
  type="text"
  min="1"
  step=" 1"
  placeholder="Product name"
  style={{ padding: "10px", marginRight: "5px" }}
/>
<input
  onChange={(e) => setProductPrice(e.target.value)}
  value={productPrice}
  type="number= "
  placeholder="Price"
  style={{ padding: "10px", marginRight: "5px" }}
/>
<button
  onClick={addProduct}
  style={{
    padding: "12px 40px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  }}
>
  Add to Cart
</button>
</div>

{products.length > 0 ? (
<div>
  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#e6f2ff",
      borderRadius: "5px",
    }}
  >
    <thead style={{ backgroundColor: "#3399ff", color: "white" }}>
      <tr>
        <th style={{ padding: "10px" }}>Name</th>
        <th style={{ padding: "10px" }}>Price</th>
        <th style={{ padding: "10px" }}>Quantity</th>
        <th style={{ padding: "10px" }}>Actions</th>
      </tr>
    </thead>
<tbody>
{products.map((item) => (
  <tr key={item.id} style={{ textAlign: "center" }}>
    <td style={{ padding: "8px" }}>{item.name}</td>
    <td style={{ padding: "8px" }}>${item.price}</td>
    <td style={{ padding: "8px" }}>{item.quantity}</td>
    <td style={{ padding: "8px" }}>
      <button
        onClick={() => decreaseQuantity(item.id)}
        style={{ marginRight: "5px" }}
      >
        -
      </button>
      <button
        onClick={() => increaseQuantity(item.id)}
        style={{ marginRight: "5px" }}
      >
        +
      </button>
      <button
        onClick={() => removeProduct(item.id)}
        style={{
          backgroundColor: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: "3px",
          padding: "2px 5px",
        }}
      >
        Remove
      </button>
    </td>
  </tr>
))}
    </tbody>
  </table>

  <p
    style={{
      marginTop: "10px",
      textAlign: "right",
      fontWeight: "bold",
      backgroundColor: "#3399ff",
      color: "white",
      padding: "10px 30px",
      borderRadius: "5px",
    
    }}
  >
    <table>
      <tbody>

          {" "}
          Total Price: $
          {products.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )}
        {" "}
      
        <td>
          Total Products:{" "}
          {products.reduce((total, item) => total + item.quantity, 0)}
        </td>
      </tbody>
    </table>
  </p>
</div>
) : (
<p>No item added</p>
)}
</div>
);


};

export default ShoppingCart;
