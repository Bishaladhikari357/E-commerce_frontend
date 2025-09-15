import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactPage.css";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { SiBandsintown } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-title">Get in Touch </h1>
        <p className="contact-subtitle">
          We'd love to hear from you! Fill out the form or reach us directly.
        </p>

        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit"> Send Message</button>
            {submitted && (
              <p className="success-msg">Thank you! We'll get back soon.</p>
            )}
          </form>

          {/* Store Info */}
          <div className="contact-info">
            <h2>Our Store</h2>
            <p><SiBandsintown /> Butwal, Nepal</p>
            <p><FaPhoneAlt /> +977-9867330928</p>
            <p><SiGmail /> support@ecommerce.com</p>

            <div className="social-links">
              <a href="#">
                 <CiFacebook className="media"/> Facebook
                 </a>
              <a href="#">
                <FaInstagram className="media" /> Instagram
                 </a>
              <a href="#">
                 <FaTwitter className="media"/> Twitter
                 </a>
            </div>

            <div className="map-container">
              <iframe
                title="map"
                src="https://th.bing.com/th/id/OSK.HERORqFGECzk5PvKU5T3zzUrmOc3iAk-SB0rMlFkoUx9XzE?w=384&h=228&c=1&rs=2&o=6&cb=thwsc5&pid=SANGAM"
                width="100%"
                height="200"
                style={{ border: "0", borderRadius: "10px", marginTop: "15px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
