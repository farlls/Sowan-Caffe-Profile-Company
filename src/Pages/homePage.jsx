import React from "react";
import Slider from "../View/slider";
import Page1 from "../View/menu";
import About from "../View/about";
import Navigation from "../View/navigation";
import Page3 from "../View/page3";
import Footer from "../View/footer";

function HomePage() {
  return (
    <div>
      <Navigation />
      <Slider />
      <About />
      <Page1 />
      <Page3 />
      <Footer />
    </div>
  );
}
export default HomePage;
