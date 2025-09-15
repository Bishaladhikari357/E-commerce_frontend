// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getTotalItems } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

  const totalItems = getTotalItems();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/home" className="nav-logo">
          MyWebsite
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/home" className="nav-item">Home</Link>
          <Link to="/products" className="nav-item">Products</Link>
          <Link to="/contact" className="nav-item">Contact</Link>

          {/* Cart */}
          <Link to="/cart" className="nav-item cart-icon">
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>

          <button onClick={toggleAuth} className="auth-btn">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/home" className="nav-item" onClick={toggleMenu}>Home</Link>
          <Link to="/products" className="nav-item" onClick={toggleMenu}>Products</Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>

          <Link to="/cart" className="nav-item cart-icon" onClick={toggleMenu}>
            <FaShoppingCart />
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>

          <button 
            onClick={() => { toggleAuth(); toggleMenu(); }} 
            className="auth-btn"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
