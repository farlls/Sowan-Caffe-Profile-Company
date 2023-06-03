import "../css/Navigation.css";
import "../css/Reservation.css";
import logo from "../assets/img/Sowan Caffe Logo.svg";
import React from "react";
import BtnMenu from "../Controller/NavbarBtn.jsx";
import ReservationBtn from '../Controller/ReservationBtn';
function Navigation() {
  return (
    <nav className="navigation">
      <div className="container-logo">
        <img className="logo" alt="Logo Sowan Caffe" src={logo}></img>
      </div>
      <div className="container-navigation-menu">
        <ul className="navigation-menu">
          <li>
            <a className="active" href="/home">
              HOME
            </a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/menu">MENU</a>
          </li>
          <li>
            <a href="/contactus">CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="main">
        <ReservationBtn />
        <BtnMenu />
      </div>
    </nav>
  );
}

export default Navigation;
