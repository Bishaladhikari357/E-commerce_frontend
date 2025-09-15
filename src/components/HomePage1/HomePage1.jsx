import React from "react";
import { Link } from "react-router-dom";
import "./HomePage1.css";
import img from '../../images/img.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'

const HomePage1 = () => {
  return (
    <div className="homepage1">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-content">
          <h1>Discover Your Next Favorite Product</h1>
          <p>Shop fashion, electronics, and lifestyle essentials — all in one place.</p>
          <Link to="/products" className="hero1-btn">
            Start Shopping
          </Link>
        </div>
        <div className="hero1-image">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending">
        <h2> Trending Now</h2>
        <div className="product1-grid">
          <div className="product1-card">
            <img src={img} alt="Mens Cotton Jacket" />
            <h3>Mens Cotton Jacket</h3>
            <p>$120</p>
          </div>
          <div className="product1-card">
            <img src={img1} alt="White Gold Plated Princess" />
            <h3>White Gold Plated Princess</h3>
            <p>$999</p>
          </div>
          <div className="product1-card">
            <img src={img2} alt="computer" />
            <h3>Computer</h3>
            <p>$585</p>
          </div>
          <div className="product1-card">
            <img src={img3} alt="women clothes" />
            <h3>Women Cotten Clothes</h3>
            <p>$149</p>
          </div>
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="deal">
        <div className="deal-content">
          <h2> Deal of the Day</h2>
          <p>Smart TVs at 50% Off – Limited Time, Limited Stock!</p>
          <Link to="/products" className="deal-btn">
            Grab the Deal
          </Link>
        </div>
      </section>

      

      
    </div>
  );
};

export default HomePage1;
