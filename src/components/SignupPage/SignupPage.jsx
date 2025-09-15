import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.css"; 
import { FaRegUserCircle, FaLock } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setMessage(" All fields are required!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    setMessage("Signup successful! Please login.");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
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

          <button type="submit" className="signup-btn">Signup</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="link-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
