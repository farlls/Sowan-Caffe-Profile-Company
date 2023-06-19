import React from 'react';
import '../css/About.css';
import mainLogo from "../assets/icons/mainlogo.svg"
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <div className="container-about" >
        <img src={mainLogo} alt="" />
        <h2 data-aos="fade-left">About Me</h2>
        <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum vitae voluptate possimus soluta laudantium minima quaerat obcaecati fugit architecto repudiandae sed qui quasi illum provident amet, saepe quibusdam itaque.</p>
      
        <button>ABOUT US</button>
    </div>
        );
  }
  export default About