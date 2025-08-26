import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/PaymentPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Get cart items from Router state
  const cartItems = location.state?.cartItems || [];

  const handlePay = () => {
    if (!paymentMethod){
      toast.error("⚠️ Please select a payment method!", {
      position: "top-right",
      autoClose: 3000,});
      return;
    }
    toast.success(`Payment successful via ${paymentMethod}`, {
      position: "top-right",
      autoClose: 3000,
      onClose: () => navigate("/productSection"),
    });

    localStorage.removeItem("cart");
  };

  // handle payment method selection with toast
  const handlePaymentSelect = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);

    toast.info(`Payment method selected: ${method}`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div>
      <div className="title">
        <h2>Cart Items</h2>
      </div>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity || 1}
          </li>
        ))}
      </ul>

      <h3>Select Payment Method</h3>

      <div className="payment-container">
        <label>
          <input
            type="radio"
            name="payment"
            value="Khalti"
            onChange={handlePaymentSelect}
          />{" "}
          Khalti
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="eSewa"
            onChange={handlePaymentSelect}
          />{" "}
          eSewa
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="Bank"
            onChange={handlePaymentSelect}
          />{" "}
          Bank
        </label>

        <button onClick={handlePay}>Pay Now</button>
        <ToastContainer />
      </div>
    </div>
  );
}
