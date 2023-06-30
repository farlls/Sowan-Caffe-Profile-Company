import ContactusPage from "../Pages/contactusPage";
import HomePage from "../Pages/homePage";
import React from "react";
import AboutUS from "../Pages/aboutusPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "../Pages/menuPage";

function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default Dashboard;
