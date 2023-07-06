import React from "react";
import "../css/About.css";
import mainLogo from "../assets/icons/mainlogo.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-about">
      <img src={mainLogo} alt="" />
      <h2 data-aos="fade-left">About Me</h2>
      <p data-aos="fade-up">
        <span>Selamat datang di Sowan Cafe!</span>
        <br />
        Sowan Cafe adalah destinasi kafe yang unik dan menarik di Daerah
        Istimewa Yogyakarta. Terletak di Jl. Kaliurang yang terkenal, kafe kami
        membanggakan kopi berkualitas tinggi yang menjadi daya tarik utama bagi
        para pecinta kopi dan pengunjung setia kami.
      </p>

      <button >ABOUT US</button>
    </div>
  );
}
export default About;
