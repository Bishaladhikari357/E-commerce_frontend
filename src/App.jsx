import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Product from "./components/Product/Product";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <CartProvider>

    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element ={<Home/>}/>
        <Route path="/products" element ={<Product/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/product/:id" element ={<ProductDetailsPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
