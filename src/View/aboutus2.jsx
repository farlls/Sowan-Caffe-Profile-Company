import React from "react";
import "../css/aboutus2.css";
import foto from "../assets/img/kafe.jpg";

function Aboutus2() {
  return (
    <div className="container-aboutus2">
      <div className="row-container-aboutus2">
        <div className="container-foto-aboutus2">
          <div className="card-img-aboutus">
            <img className="foto-kafe" src={foto} alt="foto" />
          </div>
        </div>
        <div className="container-story">
            <div className="column-story">
                <h1 className="heading-story">Here are Our Milestones</h1>
                <h3 className="sub-heading-story">Company Started</h3>
                <p className="text-story">Sowan Cafffe adalah salah satu kafe ikonik yang didirikan pada tahun 2018 di Yogyakarta. Kafe ini menjadi tempat berkumpul para ngabers, milenial, dan orang-orang gabut lainnya Jefri Nichole sering mengunjungi kafe ini. Sowan Caffe menjadi simbol budaya intelektual dan menjadi saksi perkembangan gerakan seni dan pemikiran di Yogyakarta.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutus2;
