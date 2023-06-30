import React from "react";
import anime from "../../node_modules/animejs/lib/anime.min.js";
import "../css/Slider.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Slider() {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml9 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml9 .letter",
        scale: [0, 1],
        duration: 2000,
        elasticity: 1000,
        delay: (el, i) => 45 * (i + 1),
      })
      .add({
        targets: ".ml9",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 4000,
      });

    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-slider">
      <div className="containerBackground">
        <div className="wrapper-slider">
          <div className="gambar"></div>
        </div>
      </div>
      <div className="backgroundOpacity"></div>
      <div className="subContainer">
        <div className="containerTitle">
          <h1 class="ml9">
            <span class="text-wrapper">
              <span class="letters welcome">Welcome to Sowan Coffee</span>
            </span>
          </h1>
          <h1 className="discount" data-aos="fade-left">
            UP TO 50% OFFER
          </h1>
          <div className="containerText">
            Penawaran menarik! Diskon hingga 50% untuk barang pilihan kami saat
            ini. Segera manfaatkan kesempatan ini!
          </div>
        </div>
      </div>
    </div>
  );
}
