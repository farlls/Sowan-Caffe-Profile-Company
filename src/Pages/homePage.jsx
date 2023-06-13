import React from "react";
import Slider from "../View/slider";
import Page1 from "../View/menu";
import About from "../View/about";
import Navigation from "../View/navigation";

function HomePage() {
  return (
    <div>
      <Navigation />
      <Slider /> 
      <About />
      <Page1 />
    </div>
  );
}
export default HomePage;
