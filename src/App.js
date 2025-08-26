import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./MyComponent/Login";
import ProductDetail from "./pages/ProductDetails";
import ProductSection from "./MyComponent/ProductSection";
import CartPage from "./pages/Cartpage";
import HomePage from "./MyComponent/HomePage";
import Register from "./MyComponent/Register";
import PaymentPage from "./pages/PaymentPage";

import { products as localProducts } from "./MyComponent/Data";


import axios from "axios";

function App() {


  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/products/`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching data", err));
  }, []);

  const handleLoginSuccess = (id) => {
    setUserId(id);
    localStorage.setItem("userId", id);
  };


  const allProducts = [...localProducts, ...products];

  return (
    <>
     

      <Router>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/productSection"
            element={
              userId ? (
                <ProductSection  products={allProducts} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
