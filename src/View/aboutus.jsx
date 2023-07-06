import React, { useEffect } from "react";
import "../css/aboutus.css";
import img3 from "../assets/img/aglio olio.jpg";
import img4 from "../assets/img/cinnamon.jpg";
import img5 from "../assets/img/bgdesc 2.jpg";
import signature from "../assets/img/signature.png";
import AOS from "aos";
function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="container-aboutus1">
      <div className="background-aboutus">
        <h4 className="aboutus-text">About Us</h4>
        <h6 className="sub-heading-aboutus">
          Home - <span>About Us</span>
        </h6>
      </div>
      <div className="container-card-aboutus">
        <div data-aos="zoom-in" className="card-aboutus1">
          <div className="img-about-us"></div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="250"
          className="card-aboutus2"
        >
          <img src={img3} alt="img2" />
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="250"
          className="card-aboutus3"
        >
          <img src={img4} alt="img3" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="450"
          className="card-aboutus4"
        >
          <div className="column-card-aboutus4">
            <div className="imagedesc">
              <img src={img5} alt="img5" />
              <div className="content-artical">
                <h1 className="text1-aboutus">WELCOME TO SOWAN CAFFEE</h1>
                <h1 className="text2-aboutus">
                  We Are A Modern Cafe In The Center Of Yogyakarta
                </h1>
                <p className="text3-aboutus">
                  Selamat datang di Sowan Caffe yang menawarkan pengalaman kopi
                  unik dengan biji kopi pilihan terbaik.Bergabunglah dalam
                  perjalanan kopi tak terbatas dan temukan kenikmatan sejati
                  dalam setiap cangkir kopi.
                </p>
                <p className="text4-aboutus">
                  ” Coming to us for a lunch or a dinner should feel just as
                  comfortable, as having one at home “
                </p>
                <div className="signature">
                  <img
                    src={signature}
                    className="img_signature"
                    alt="signature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
