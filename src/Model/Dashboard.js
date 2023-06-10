import ContactusPage from "../Pages/contactusPage";
import HomePage from "../Pages/homePage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Dashboard() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </Router>
  );
}

export default Dashboard;
