import React from "react";
import "../css/About.css";
import mainLogo from "../assets/icons/mainlogo.svg";
import { useEffect } from "react";
import bgburger from "../assets/img/bg-burger.png";
import bgdessert from "../assets/img/bg_cupcakes.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-about">
      <img src={bgburger} alt="bg-burger" className="bg-burger-aboutus"/>
      <img src={bgdessert} alt="bg-dessert" className="bg-burger-aboutus-two"/>
      <img src={mainLogo} alt="logo" className="logo-sowan" />
      <h2 data-aos="fade-left">About Us</h2>
      <p data-aos="fade-up">
        <span>Selamat datang di Sowan Cafe!</span>
        <br />
        Sowan Cafe adalah destinasi kafe yang unik dan menarik di Daerah
        Istimewa Yogyakarta. Terletak di Jl. Kaliurang yang terkenal, kafe kami
        membanggakan kopi berkualitas tinggi yang menjadi daya tarik utama bagi
        para pecinta kopi dan pengunjung setia kami.
      </p>

      <button>
        <Link to="/aboutus" className="buttonAbout">ABOUT US</Link>
      </button>
    </div>
  );
}
export default About;
