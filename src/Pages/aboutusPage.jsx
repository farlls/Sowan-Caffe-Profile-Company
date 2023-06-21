import React from "react";
import AboutUsComp from "../View/aboutus";
import Aboutus2 from "../View/aboutUs2";
import Navigation from "../View/navigation";
function AboutUs(){
    return(
        <div>   
            <Navigation />
            <AboutUsComp />
            <Aboutus2 />
        </div>
    );
}
export default AboutUs;