import Navigation from "../View/navigation";
import Reservation from "../View/reservation";
import Page1 from "../View/page1";
import React from "react";
import Slider from "../View/slider";
import Page3 from "../View/page3";

function Dashboard() {
  return (
    <body>
      <Navigation />
      <Slider />
      <Page1 />
      <Page3/>
    </body>
  );
}

export default Dashboard;
