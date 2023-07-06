import React from "react";
import AboutUsComp from "../View/aboutus";
import Navigation from "../View/navigation";
import Footer from "../View/footer";
import Aboutus2 from "../View/aboutuspage2";

function AboutUsPage(){
    return(
        <>   
            <Navigation />
            <AboutUsComp />
            <Aboutus2 />
            <Footer />
        </>
    );
}
export default AboutUsPage;