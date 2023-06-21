import React from "react";
import AboutUsComp from "../View/aboutus";
import Aboutus2 from "../View/aboutUs2";
import Navigation from "../View/navigation";
import Footer from "../View/footer";

function AboutUs(){
    return(
        <>   
            <Navigation />
            <AboutUsComp />
            <Aboutus2 />
            <Footer />
        </>
    );
}
export default AboutUs;