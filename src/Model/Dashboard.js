import Navigation from "../View/navigation";
import Page1 from "../View/page1";
import Page2 from "../View/page2";
// import Reservation from "../View/reservation";
import React from "react";
import Slider from "../View/slider";

function Dashboard() {
  return (
    <body>
      <Navigation />
      <Slider />
      <Page1 />
      <Page2 />
    </body>
  );
}

export default Dashboard;
