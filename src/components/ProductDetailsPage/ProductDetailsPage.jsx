import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductPage1.css";
import Navbar from "../Navbar/Navbar";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, getItemCount } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const quantity = getItemCount(product.id);

  return (
    <>
    <Navbar/>
    <div className="page-container">
      <div className="product-details-row">
        <img
          src={product.image}
          alt={product.title}
          className="product-img-left"
          />

        <div className="product-info-right">
          <h1 className="page-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-rating">
            ⭐ {product.rating?.rate} ({product.rating?.count})
          </p>

          {/* Cart Controls */}
         {quantity === 0 ? (
  <button
    className="add-to-cart-btn"
    onClick={() => addToCart(product)}
  >
    Add to Cart
  </button>
) : (
  <div className="cart-controls">
    <button onClick={() => removeFromCart(product)}>-</button>
    <span>{quantity}</span>
    <button onClick={() => addToCart(product)}>+</button>
  </div>
)}

        </div>
      </div>
    </div>
          </>
  );
};

export default ProductDetailsPage;
