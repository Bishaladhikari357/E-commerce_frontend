import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css"; 
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage(" No user found. Please signup first.");
      return;
    }

    if (
      formData.username === storedUser.username &&
      formData.password === storedUser.password
    ) {
      navigate("/dashboard");
    } else {
      setMessage(" Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          {/* Username input */}
          <div className="input-group">
            <FaRegUserCircle className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          {/* Password input */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="link-text">
          Don't have an account? <Link to="/signup"> Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
