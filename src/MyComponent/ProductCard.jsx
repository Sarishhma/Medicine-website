import React from "react";
import "../css/Dashboard.css"


const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => alert(`Redirect to product id: ${product.id}`)}
      />
      <div className="product-overlay">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="price">${product.price}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;
