import React from "react";
import "../css/Home.css";
import { Link,useNavigate } from "react-router-dom";



const HomePage = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-brand">Health Pharmacy</div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/login">Log-in</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

     
    </div>
  );
};

export default HomePage;
