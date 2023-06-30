import ContactusPage from "../Pages/contactusPage";
import HomePage from "../Pages/homePage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "../Pages/menuPage";
import AboutUsPage from "../Pages/aboutusPage";


function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default Dashboard;
