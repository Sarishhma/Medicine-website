import React from "react";
import "../css/Dashboard.css"
import { Link } from "react-router-dom";



const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image">
      <Link to={`/products/${product.id}`}>
       <img
        src={product.image}
        alt={product.name}
       
      /> 


      <div className="product-overlay">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="price">${product.price}</span>
      </div>
      </Link>
    
    </div>
  </div>
);

export default ProductCard;
