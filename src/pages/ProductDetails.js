import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products as localProducts } from "../MyComponent/Data"; // your local products
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const foundProduct = localProducts.find(
      (p) => p.id === parseInt(id, 10)
    );
    setProduct(foundProduct);
  }, [id]);
  const isLoggedIn = () => {
    const userId = localStorage.getItem("userId");
    return userId != null && userId !== "";
  }
  const handleAddToCart = () => {

    if (!isLoggedIn()) {
      toast.info("Please login to add items to cart.", {
        position: "top-right",
        autoClose: 3000,  // disappears after 3 seconds
        onClose: () => navigate("/login")
      });

      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.info(`${product.name} added items to cart.`, {
      position: "top-right",
      autoClose: 3000,  // disappears after 3 seconds
      onClose: () => navigate("/productSection")
    });
  }
    const handleBuyNow = () => {

      if (!isLoggedIn()) {
        toast.info("Please login to buy the items", {
          position: "top-right",
          autoClose: 3000,
          onClose: () => navigate("/login")
        });
        return;
      }
      const cartItem = { ...product, quantity: 1 };
      navigate("/payment", { state: { cartItems: [cartItem] } });
    };

    if (!product) return <p>Loading product...</p>;

    return (
      <div className="product-detail">
        <img src={product.image} alt={product.name} style={{ width: "300px" }} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>

        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNow}>Buy Now</button>
        <ToastContainer />
      </div>
    );
  };

  export default ProductDetail;
