
import ContactusPage from "../Pages/contactusPage";
import HomePage from "../Pages/homePage";
import React from "react";

import Slider from "../View/slider";
import Page3 from "../View/page3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </Router>


  );
}

export default Dashboard;
