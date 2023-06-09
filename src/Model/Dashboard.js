import Navigation from "../View/navigation";
import Reservation from "../View/reservation";
import Menu from "../View/menu";
import React from "react";
import About from "../View/about";
import Slider from "../View/slider";

function Dashboard() {
  return (
    <body>
      <Navigation />
      <Slider />
      <About />
      <Menu />
    
    </body>
  );
}

export default Dashboard;
