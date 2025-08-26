import React, { useState } from "react";
import ProductCard from "./ProductCard";
import LogOut from "./LogOut";
import "../css/Dashboard.css";
import CardNav from "./CardNav";
import {ParticleCard} from './MagicBento'
import { Link } from "react-router-dom";



const ProductSection = ({ title, products }) => {
    const items = [
    {
      label: "Login",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [{ label: "Login", ariaLabel: "About Company", href: "/login" }],
    },
    {
      label: "Home page",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [{ label: "Home", ariaLabel: "About Company", href: "/" }],
    },
    {
      label: "Register",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Register", ariaLabel: "About Careers", href: "/register" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" },
      ],
    },
  ];

  const [search, setSearch] = useState("");

  // filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <section className="product-section">

      <h2 className="section-title">{title}</h2>

      <CardNav
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
    
       
      
      <div className="top-bar">
        <nav>
        <Link to="/cart" className="cart">  🛒 Cart</Link>
       </nav><br/>
        <LogOut />
      </div>
<div className="Rinput-container"> 
      <input
        type="text"
        placeholder="Enter the products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
</div>
      <div className="products-grid">
        {filteredProducts.map((product,index) => {
          let imageUrl = product.image;
          if (product.image?.startsWith("http")) {
            imageUrl = product.image;
          } else if (product.image?.startsWith("/")) {
            imageUrl = `${process.env.REACT_APP_BACKEND_URL}${product.image}`;
          } else {
            imageUrl = process.env.PUBLIC_URL + product.image;
          }

          return (
      
             <ParticleCard
              key={product.id || index}
              particleCount={12}          // number of particles
              glowColor="132,0,255"       // particle glow color
              enableTilt={true}           // card tilt on hover
              clickEffect={true}          // ripple effect on click
              enableMagnetism={true}      // magnetism effect
              className="product-particle-card"
            >
        <ProductCard  product={{ ...product, image: imageUrl }} />
  </ParticleCard>
          );
        })}
   
      </div>
 
    </section>
  );
};

export default ProductSection;
