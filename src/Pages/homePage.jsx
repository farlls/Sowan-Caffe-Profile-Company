import React from "react";
import Slider from "../View/slider";
import Page1 from "../View/menu";
import About from "../View/about";
import Navigation from "../View/navigation";
import Footer from "../View/footer";
import Page3 from "../View/page3";
import Page2 from "../View/page2";


function HomePage() {
  return (
    <>
      <Navigation />
      <Slider /> 
      <About />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </>
  );
}
export default HomePage;
