import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({handleBuyNow}) => {
  const [cartItems, setCartItems] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);
const handlePayment=()=>{
  navigate("/payment",{state:{cartItems}})
}
  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce(
  (acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1),
  0
);


  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} x {item.quantity}{" "}
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
         <h3>Total: ${total.toFixed(2)}</h3>
<button onClick={handlePayment}>Buy</button>


        </>
      )}
    </div>
  );
};

export default CartPage;
