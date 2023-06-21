
import ContactusPage from "../Pages/contactusPage";
import HomePage from "../Pages/homePage";
import React from "react";
// import AboutUS from "../Pages/aboutusPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/aboutusPage";

// function Dashboard() {
//   return (
//     <body>
//       <Navigation />
//       <Slider />
//       <Page1 />
//       <Page3/>
//     </body>
//   )
// }

function Dashboard() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </Router>


  );
}

export default Dashboard;
