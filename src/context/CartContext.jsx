import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
const CartContext = createContext();

// 2️⃣ Custom Hook
export const useCart = () => useContext(CartContext);

// 3️⃣ Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [notification, setNotification] = useState(null);

  // 👉 Helper to show notification
  const showNotification = (message) => {
    setNotification(message);

    // auto-hide after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
    showNotification(`${product.title} added to cart 🛒`);
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      if (!prev[product.id]) return prev;

      const updatedCart = { ...prev, [product.id]: prev[product.id] - 1 };

      if (updatedCart[product.id] <= 0) delete updatedCart[product.id];

      return updatedCart;
    });
    showNotification(`${product.title} removed from cart ❌`);
  };

  const getItemCount = (productId) => cart[productId] || 0;

  const getTotalItems = () =>
    Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getItemCount,
        getTotalItems,
        notification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
