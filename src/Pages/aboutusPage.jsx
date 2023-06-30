import React from "react";
import AboutUs from "../View/aboutus";
import Aboutus2 from "../View/aboutus2";
import Navigation from "../View/navigation";
import Footer from "../View/footer";
function AboutUS(){
    return(
        <div>   
            <Navigation />
            <AboutUs />
            <Aboutus2 />
            <Footer />
        </div>
    );
}
export default AboutUS;