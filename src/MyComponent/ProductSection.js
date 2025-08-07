import React from "react";
import ProductCard from "./ProductCard";
import LogOut from "./LogOut";
import "../css/Dashboard.css"

const ProductSection = ({ title, products }) => (
  
  <section className="product-section">
    <h2 className="section-title">{title}</h2>
    
      <div className="top-bar">
        <LogOut/>
      </div>
      <div className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductSection;


