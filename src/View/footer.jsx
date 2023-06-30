import "../css/Footter.css";
import React from "react";
import logo from "../assets/img/Sowan Caffe Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import iconclock from "../assets/icons/clock.svg";
import coffee from "../assets/img/BestLatteArt.jpg";
import burgerChese from "../assets/img/burger4.jpg";
import IconPhone from "../assets/icons/Icon-Phone.svg";
import IconAddress from "../assets/icons/Icon-Address.svg";
import IconEmail from "../assets/icons/icon-email.svg";

function Footer() {
  return (
    <footer>
      <div className="container-footer-background">
        <div className="column-footer">
          <section className="footer-menu">
            <div className="row-footer-menu">
              <div className="menu-one-footer">
                <div className="menu-one-column">
                  <img
                    className="footer-logo"
                    src={logo}
                    alt="footer-logo"
                  ></img>
                  <p className="desc-menu-one">
                    Coffee is a beverage prepared from roasted coffee beans.
                    Darkly colored, bitter, and slightly acidic, coffee has a
                    stimulating effect on humans, primarily due to its caffeine
                    content.
                  </p>
                  <div className="row-sosmed-icon">
                    <a className="icon-sosmed" href="https://www.facebook.com/">
                      <FaFacebook />
                    </a>
                    <a
                      className="icon-sosmed"
                      href="https://www.instagram.com/"
                    >
                      <FaInstagram />
                    </a>
                    <a className="icon-sosmed" href="https://twitter.com/">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div className="menu-two-footer">
                <div className="menu-two-column">
                  <h3 className="heading-menu">Recent Posts</h3>
                  <div className="content-menu-two">
                    <h4 className="heading-content">
                      Delicious Hot Grilled Chicken Recipes
                    </h4>
                    <h6 className="subheading-content">October 4, 2023</h6>
                  </div>
                  <div className="content-menu-two">
                    <h4 className="heading-content">
                      Better Fed Than Red Whether Glories
                    </h4>
                    <h6 className="subheading-content">October 4, 2023</h6>
                  </div>
                  <div className="content-menu-two">
                    <h4 className="heading-content">
                      Trade Pastry Wrap To Coat Fish, Poultry
                    </h4>
                    <h6 className="subheading-content">October 4, 2023</h6>
                  </div>
                </div>
              </div>
              <div className="menu-tree-footer">
                <div className="menu-tree-column">
                  <h3 className="heading-menu-tree">Popular Posts</h3>
                  <div className="row-content">
                    <img
                      className="img-row-content-burger"
                      src={burgerChese}
                      alt="img-burgerchese"
                    ></img>
                    <div className="column-content">
                      <h4 className="heading-content">
                        Irresistible and Delicious Cheeseburger Recipe - Your
                        Ultimate Guide
                      </h4>
                      <div className="row-headingIcon">
                        <img
                          className="icon-clock"
                          src={iconclock}
                          alt="icon-clock"
                        ></img>
                        <h6 className="subheading-content-tree">
                          October 4, 2023
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="row-content">
                    <img
                      className="img-row-content-coffe"
                      alt="img-coffee"
                      src={coffee}
                    ></img>
                    <div className="column-content">
                      <h4 className="heading-content">
                        Mastering the Art of Latte: Unleashing Your Creativity
                        in Latte Art
                      </h4>
                      <div className="row-headingIcon">
                        <img
                          className="icon-clock"
                          src={iconclock}
                          alt="icon-clock"
                        ></img>
                        <h6 className="subheading-content-tree">
                          October 4, 2023
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-four-footer">
                <div className="column-four-footer">
                  <h3 className="heading-menu-four">Contact US</h3>
                  <div className="row-content">
                    <img
                      className="icon-four-footer"
                      src={IconPhone}
                      alt="icon-phone"
                    ></img>
                    <h4 className="text-four">0820230606</h4>
                  </div>
                  <div className="row-content">
                    <img
                      className="icon-four-footer"
                      src={IconAddress}
                      alt="icon-address"
                    ></img>
                    <h4 className="text-four">
                      42 Jl. Kaliurang Daerah Istimewa Yogyakarta
                    </h4>
                  </div>
                  <div className="row-content">
                    <img
                      className="icon-four-footer"
                      src={IconEmail}
                      alt="icon-email"
                    ></img>
                    <h4 className="text-four">sowancaffe@gmail.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h5 className="Copyright">
            Copyrights © 2023 <span>Sowan Caffe.</span> Designed by
            <span> sowancaffe</span>
          </h5>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
