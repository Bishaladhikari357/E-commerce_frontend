import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar/>
      <Home/>
    </div>
  );
};

export default Dashboard;
