import '../css/Navigation.css';
import logo from '../assets/img/logo1.png';
import React from 'react';
import BtnMenu from '../Controller/NavbarBtn.jsx';
// import BtnReservation from '../Controller/ReservationBtn.jsx';
// import Reservation from './reservation.jsx';
function Navigation() {
    
  return (
    <nav className="navigation">
        <div className="container-logo">
        <img className="logo" alt="Logo Sowan Caffe"  src={logo}></img>
        </div>
        <div className="container-navigation-menu">
        <ul className="navigation-menu">
                <li>
                    <a className="active" href="/home">
                    HOME
                    </a>
                </li>
                <li>
                    <a href="/about">
                    ABOUT US
                    </a>
                </li>
                <li>
                    <a href="/menu">
                    MENU
                    </a>
                </li>
                <li>
                    <a href="/contactus">
                    CONTACT US
                    </a> 
                </li>
            </ul>
        </div>
            <div className="main">
            <button className="reservation-btn"><a  href="/reservation">RESERVATION</a></button>
            <BtnMenu />
            </div>
        </nav>
  );
}

export default Navigation;