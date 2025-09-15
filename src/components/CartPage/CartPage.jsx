// CartPage.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "../Navbar/Navbar";
import "./CartPage.css";
import { FaShoppingBag } from "react-icons/fa";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [products, setProducts] = useState([]);

  // Fetch all products once so we can map IDs to product details
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Get cart products with details
  const cartItems = Object.keys(cart)
    .map((id) => {
      const product = products.find((p) => p.id === parseInt(id));
      return product
        ? { ...product, quantity: cart[id], total: product.price * cart[id] }
        : null;
    })
    .filter(Boolean);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1>Your Cart <FaShoppingBag/></h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />
                  <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="cart-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => removeFromCart(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>
                    <p>Total: ${item.total.toFixed(2)}</p>
                    <button
                      className="remove-btn"
                      onClick={() => {
                        // remove all quantity of this product at once
                        for (let i = 0; i < item.quantity; i++) {
                          removeFromCart(item);
                        }
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
