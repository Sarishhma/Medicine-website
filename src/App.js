import "./App.css";
import React, { useState } from "react";
import Login from "./MyComponent/Login";

import { products } from "./MyComponent/Data";
import ProductSection from "./MyComponent/ProductSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./MyComponent/HomePage";
import Register from "./MyComponent/Register";

function App() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const handleLoginSuccess = (id) => {
    setUserId(id);
  };

  const title = "Featured Products";
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {!userId ? (
            <Route
              path="login/"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
          ) : (
            <Route
              path="/productSection"
              element={<ProductSection title={title} products={products} />}
            />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
