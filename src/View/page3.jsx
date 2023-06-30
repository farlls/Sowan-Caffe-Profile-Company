import React, { useEffect } from "react";
// import React from "react";
import "../css/page3.css";
import AOS from "aos";
import "aos/dist/aos.css";
import clock from "../assets/icons/clock.svg";
import award from "../assets/icons/awwardwin.svg";
import qualified from "../assets/icons/qualifiedstaff.svg";
import branch from "../assets/icons/branch.svg";
import happycust from "../assets/icons/happycust.svg";
// import "./page3.css";

export const Selection = () => {};

function Page3() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="column-container-page3">
      <div className="container-page3">
        <div className="background1-page3"></div>
        <div className="row1-page3">
          <div className="column1-page3" data-aos="fade-right">
            <img className="food1" src={award} alt="" />
            <h4 className="Number1">
              {" "}
              400 <span>+</span>
            </h4>
            <span className="QT">Award Win</span>
          </div>

          <div className="column1-page3 " data-aos="fade-right">
            <img className="food1" src={qualified} alt="" />
            <h4 className="Number1">
              {" "}
              400 <span>+</span>
            </h4>
            <span className="QT">Qualifid Staff</span>
          </div>

          <div className="column1-page3" data-aos="fade-left">
            <img className="food1" src={branch} alt="" />
            <h4 className="Number1">
              {" "}
              400 <span>+</span>
            </h4>
            <span className="QT">Branch</span>
          </div>

          <div className="column1-page3" data-aos="fade-left">
            <img className="cafe" src={happycust} alt="" />
            <h4 className="Number">
              {" "}
              350 <span>+</span>
            </h4>
            <span className="Branch">Happy Customers</span>
          </div>
        </div>
      </div>
      {/* container page 2  */}
      <div className="container-page3-side2">
        <div className="heading-side2">
          <h3>BLOG</h3>
          <h2>Latest News</h2>
        </div>
        <div className="column-page3-side2">
          <div className="container-card" data-aos="fade-right">
            <div className="imgcard"></div>
            <div className="dateart">
              <img src={clock} alt="" />
              <div id="descTime">October 4, 2018</div>
            </div>
            <div className="container-art-text">
              <h6>Delicious Fried Egg And French Fries</h6>
              <p>
                A mouthwatering breakfast that pleases the tongue and stomach
                includes crunchy potatoes, soft eggs, and flavorful toast.{" "}
                <span>read more..</span>
              </p>
            </div>
          </div>
          <div className="container-card" data-aos="fade-right">
            <div className="imgcard2"></div>
            <div className="dateart">
              <img src={clock} alt="" />
              <div id="descTime">November 4, 2020</div>
            </div>
            <div className="container-art-text">
              <h6>Delicious Prime Beef Patty Burger</h6>
              <p>
                A delicious thick beef burger with a combination of savory and
                juicy flavors will spoil your palate. <span>read more..</span>
              </p>
            </div>
          </div>
          <div className="container-card" data-aos="fade-left">
            <div className="imgcard3"></div>
            <div className="dateart">
              <img src={clock} alt="" />
              <div id="descTime">October 4, 2018</div>
            </div>
            <div className="container-art-text">
              <h6>
                Delicious Prime Beef Steak with Chef's Signature Mayo Sauce
              </h6>
              <p>
                A superb mayonnaise sauce gives the delectable steak a savory
                flavor and alluring texture. <span>read more..</span>
              </p>
            </div>
          </div>
          <div className="container-card" data-aos="fade-left">
            <div className="imgcard4"></div>
            <div className="dateart">
              <img src={clock} alt="" />
              <div id="descTime">October 4, 2018</div>
            </div>
            <div className="container-art-text">
              <h6>Delicious Fresh Grilled Salmon With Salad</h6>
              <p>
                Salmon that has been grilled with fresh veggies has a delicious
                balance of savory flavors and natural freshness.{" "}
                <span>read more..</span>
              </p>
            </div>
          </div>
        </div>
        {/* BAGIAN FOOTER
        return(
          <div className="selection">
            <div className="footer-site-footer-wrapper">
              <div className="footer-site-footer" style={{backgroundImage: "url(footer-site-footer.svg"}}>
                <div className="div-row">
                  <div className="div-footer-middle">
                    <div className="section-media-image">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) */}
      </div>
    </div>
  );
}
export default Page3;
